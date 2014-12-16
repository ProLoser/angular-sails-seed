/**
 * Messages component which is divided to following logical components:
 *
 *  Controllers
 *
 * All of these are wrapped to 'frontend.auth.login' angular module.
 */
// Define frontend.auth.login angular module
var module = angular.module('frontend.auth.login', []);

// Module configuration
module.config(function($stateProvider) {
    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: '/auth/login/login.html',
            controller: 'LoginController'
        })
        .state('logout', {
            url: '/logout',
            onEnter: function(Auth, $state) {
                Auth.logout();
                $state.go('login');
            }
        })
    ;
});

/**
 * Login controller to handle user's login to application. Controller uses 'Auth' service to make actual HTTP
 * request to server and try to authenticate user.
 *
 * After successfully login Auth service will store user data and JWT token via 'Storage' service where those are
 * asked whenever needed in application.
 *
 * @todo
 *  1) different authentication providers
 *  2) user registration
 */
module.controller('LoginController', function LoginController( $scope, $state, Auth, $sailsSocket, BackendConfig ) {
    $scope.backend = BackendConfig.url;

    $scope.user = {};

    // Scope function to perform actual login request to server
    $scope.login = function login() {
        Auth.login({ identifier: $scope.user.username, password: $scope.user.password }).then(function() {
            // $state.go('auth.home');
        });
    };

    $scope.register = function register() {
        Auth.register($scope.user).then(function() {
            // $state.go('auth.home');
        });
    };    
});
