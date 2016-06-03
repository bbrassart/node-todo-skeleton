angular.module('myTodoApp.directives')

.directive('mainscreen', ['mainService', function(mainService) {
    ctrl = [function() {
        var self;
        self = this;
        self.formData = {};
        self.object = {
            name: "item"
        };
        self.todos = [];

        self.loading = true;
        allTodos = mainService.getTodos();
        allTodos.$promise.then( function(data) {
            self.todos = data;
            self.loading = false;
        });

        // CREATE ==================================================================
        self.createTodo = function() {
            if (self.formData.text != undefined) {
                self.loading = true;

                taskApiService.create(self.formData)
                    .success(function(data) {
                        self.loading = false;
                        self.formData = {};
                        self.todos = data;
                    })
            }
        }
        // DELETE ==================================================================

        self.deleteTodo = function(id) {
            self.loading = true;

            taskApiService.delete(id)
                .success(function (data) {
                    self.loading = false;
                    self.todos = data;
                })
        };
        return self;
    }];

    return {
        bindToController: true,
        scope: {},
        controller: ctrl,
        controllerAs: 'vm',
        templateUrl: 'templates/_mainScreen.html'
    };
}]);