angular.module('myTodoApp.services')

    .factory('todoApiService', [
        'apiService', function(apiService) {
            return {
                get: function() {
                    todos = apiService.get();
                    return todos;
                }
            }
        }
    ]);