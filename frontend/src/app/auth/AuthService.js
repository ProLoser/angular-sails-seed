/**
 * Auth service which is used to authenticate users with backend server and provide simple
 * methods to check if user is authenticated or not.
 *
 * Within successfully login process service will store user data and JWT token to local
 * storage where those are accessible in the application.
 *
 * This service provides following methods:
 *
 *  Auth.authorize(access)
 *  Auth.isAuthenticated()
 *  Auth.login(credentials)
 *  Auth.logout()
 *
 * You can use this service fairly easy on your controllers and views if you like to. It's
 * recommend that you use this service with 'CurrentUser' service in your controllers and
 * views.
 *
 * Usage example in controller:
 *
 *  angular
 *      .module('app')
 *      .controller('SomeController',
 *          [
 *              '$scope', 'Auth', 'CurrentUser',
 *              function ($scope, Auth, CurrentUser) {
 *                  $scope.auth = Auth;
 *                  $scope.user = CurrentUser.user;
 *              }
 *          ]
 *      );
 *
 * Usage example in view:
 *
 *  <div ng-show="auth.isAuthenticated()">
 *      Hello, <strong>{{user().email}}</strong>
 *  </div>
 *
 * Happy coding!
 *
 * @todo    Revoke method?
 * @todo    Text localizations?
 */
angular.module('frontend.auth').factory('Auth', function( $http, $state, $localStorage, AccessLevels, BackendConfig, MessageService ) {
    return {
        /**
         * Method to authorize current user with given access level in application.
         *
         * @param   {Number}    accessLevel Access level to check
         *
         * @returns {Boolean}
         */
        'authorize': function authorize(accessLevel) {
            if (accessLevel === AccessLevels.user) {
                return this.isAuthenticated();
            } else if (accessLevel === AccessLevels.admin) {
                return this.isAuthenticated() && Boolean($localStorage.authToken.user.admin);
            } else {
                return accessLevel === AccessLevels.anon;
            }
        },

        /**
         * Method to check if current user is authenticated or not. This will just
         * simply call 'Storage' service 'get' method and returns it results.
         *
         * @returns {Boolean}
         */
        'isAuthenticated': function isAuthenticated() {
            return Boolean($localStorage.authToken);
        },

        /**
         * Method make login request to backend server. Successfully response from
         * server contains user data and JWT token as in JSON object. After successful
         * authentication method will store user data and JWT token to local storage
         * where those can be used.
         *
         * @param   {*} credentials
         *
         * @returns {*|Promise}
         */
        'login': function login(credentials) {
            return $http
                .post(BackendConfig.url + '/login', credentials, {withCredentials: true})
                .then(function(response) {
                    MessageService.success('You have been logged in.');

                    $localStorage.authToken = response.data;
                });
        },

        /**
         * The backend doesn't care about actual user logout, just delete the token
         * and you're good to go.
         *
         * Question still: Should we make logout process to backend side?
         */
        'logout': function logout() {
            delete $localStorage.authToken;

            MessageService.success('You have been logged out.');

            $state.go('login');
        },

        'register': function register(credentials) {
            return $http
                .post(BackendConfig.url + '/register', credentials, {withCredentials: true})
                .then(function(response) {
                    MessageService.success('You have been registered.');

                    $localStorage.authToken = response.data;
                });
        },

        
        'getUser': function getUser() {
            return $localStorage.authToken && $localStorage.authToken.user || {};
        }
    };
});
