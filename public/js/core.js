var app = angular.module('myTodoApp', ['ngResource', 'ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('userLogin', {
            url: "/login",
            template: '<userlogin></userlogin>'
        })
        .state('mainScreen', {
            url: "/",
            template: '<mainscreen></mainscreen>'
        });
    $urlRouterProvider.otherwise('/login');
}]);