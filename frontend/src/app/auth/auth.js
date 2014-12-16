/**
 * Angular module for auth component. This component is divided to following logical components:
 *
 *  frontend.auth.login
 *
 * Each component has it own configuration for ui-router.
 */
// Define frontend.auth module
angular.module('frontend.auth', [
    'frontend.auth.login'
]);

// Module configuration
angular.module('frontend.auth').config(function($stateProvider) {
    $stateProvider.state('auth', {
        abstract: true,
        resolve: {
            authUser: function(AuthService, $state, $q){
                var authUser = AuthService.getUser();
                if (!authUser.username) {
                    $state.go('login');
                    return $q.reject('Please Login');
                } else {
                    return authUser;
                }
            }
        },
        template: '<ui-view/>'
    });
});
