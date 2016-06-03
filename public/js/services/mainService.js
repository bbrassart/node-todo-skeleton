angular.module('myTodoApp.services')
    .factory ('mainService', ['todoApiService', function(todoApiService) {
        var self = this;
        self.todos = [];

        self.getTodos = function() {
            self.todos = todoApiService.get();
            return self.todos;
        };
        return self;
    }]);