angular.module('myTodoApp.directives')

.directive('itemsscreen', [ function() {
    ctrl = [ function() {
        var self = this;
        debugger

        return self
    } ];

    return {
        bindToController: true,
        scope: {
            items: "=",
            object: "="
        },
        controller: ctrl,
        controllerAs: 'vm',
        templateUrl: 'templates/_itemsScreen.html'
    };

}]);