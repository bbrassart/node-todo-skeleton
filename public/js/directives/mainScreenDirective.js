angular.module('appDirectives', [])

    .directive('mainscreen', ['taskApiService', function(taskApiService) {

        ctrl = function() {
            var self = this;
            self.formData = {};
            self.loading = true;

            // GET =====================================================================
            taskApiService.get()
                .success(function(data) {
                    self.todos = data;
                    self.loading = false;
                })

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
            }
        }

        return {
            scope: {},
            bindToController: {},
            controller: ctrl,
            controllerAs: 'vm',
            templateUrl: 'templates/_mainScreen.html'
        };
    }]);