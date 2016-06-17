app.factory('todoApiService', [
    'apiService', function(apiService) {
        self.params = {};
        self.params.operator = 'todos';
        return {
            get: function() {
                todos = apiService.get(self.params);
                return todos;
            },
            post: function(todoData) {
                self.params.text = todoData.text;
                todos = apiService.post(self.params);
                return todos;
            },
            delete: function(todoId) {
                self.params.id = todoId;
                todos = apiService.delete(self.params);
                return todos;
            }
        }
    }
]);