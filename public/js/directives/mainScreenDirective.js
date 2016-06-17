app.directive('mainscreen', ['mainService', function(mainService) {

    ctrl = function() {
        var self = this;
        self.formData = {};
        self.loading = true;

        self.init = function() {
            todos = mainService.getTodos();
            todos.$promise.then(function(data) {
                self.todos = data;
                self.loading = false;
            });
        };
        self.init();


        self.createTodo = function() {
            if (self.formData.text != undefined) {
                self.loading = true;
                newTodo = mainService.createTodo(self.formData);
                newTodo.$promise.then(function(data) {
                    self.loading = false;
                    self.formData = {};
                    self.todos = data;
                });
            }
        };

        self.deleteTodo = function(id) {
            self.loading = true;

            deletedTodo = mainService.deleteTodo(id);
            deletedTodo.$promise.then(function(data) {
                self.loading = false;
                self.todos = data;
            });
        }
    }

    return {
        restrict: "E",
        scope: {},
        bindToController: true,
        controller: ctrl,
        controllerAs: 'vm',
        templateUrl: 'templates/_mainScreen.html'
    };
}]);