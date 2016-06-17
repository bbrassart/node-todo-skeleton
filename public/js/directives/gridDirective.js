app.directive('grid', [ function() {

    ctrl = function() {
        var self = this;
    };

    return {
        restrict: "E",
        scope: {
            items: "=",
            deleteTodo: "&"
        },
        bindToController: true,
        controller: ctrl,
        controllerAs: 'vm',
        templateUrl: 'templates/_grid.html'
    };
}]);