/**
 * Frontend application definition.
 *
 * This is the main file for the 'Frontend' application.
 *
 * @todo should these be done in separated files?
 */
// Create frontend module and specify dependencies for that
var module = angular.module('frontend', [
    'ngStorage',
    'ui.router',
    'sails.io',
    'frontend-templates',
    'frontend.core',
    'frontend.auth'
]);

/**
 * Configuration for frontend application, this contains following main sections:
 *
 *  1) Configure $httpProvider and $sailsSocketProvider
 *  2) Set necessary HTTP and Socket interceptor(s)
 *  3) Turn on HTML5 mode on application routes
 *  4) Set up application routes
 */
module.config(function($stateProvider, $locationProvider, $urlRouterProvider, $httpProvider, $sailsSocketProvider) {
    $httpProvider.defaults.useXDomain = true;

    delete $httpProvider.defaults.headers.common['X-Requested-With'];

    // Add interceptors for $httpProvider and $sailsSocketProvider
    $httpProvider.interceptors.push('AuthInterceptor');
    $sailsSocketProvider.interceptors.push('AuthInterceptor');

    // Yeah we wanna to use HTML5 urls!
    $locationProvider.html5Mode(true).hashPrefix('!');

    // For any unmatched url, redirect to '/'
    $urlRouterProvider.otherwise('/');
});

module.run(function($rootScope){
    // Useful for debugging ui-router errors
    $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error){
        console.log('$stateChangeError', event, toState, toParams, fromState, fromParams);
        throw error;
    });
});