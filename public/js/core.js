var app = angular.module('myTodoApp', ['ngResource', 'ui.router']);

app.config(['$stateProvider', function($stateProvider) {
    $stateProvider
        .state('userLogin', {
            views: {
                "screen-container": {
                    template: "<userlogin></userlogin>"
                }
            }
        })
        .state('mainScreen', {
            views: {
                "screen-container": {
                    template: "<mainscreen></mainscreen>"
                }
            }
        });
}]);

app.run(["$state", function($state) {
    $state.go("userLogin");
}]);