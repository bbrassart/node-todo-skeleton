app.factory ('mainService', ['todoApiService', function(todoApiService) {
    var self = this;
    self.todos = [];
    self.params = {};

    self.getTodos = function() {
        self.todos = todoApiService.get();
        return self.todos;
    };

    self.createTodo = function(todoData) {
        self.newTodos = todoApiService.post(todoData);
        return self.newTodos;
    };

    self.deleteTodo = function(todoId) {
        self.deletedTodo = todoApiService.delete(todoId);
        return self.deletedTodo;
    }

    return self;
}]);
