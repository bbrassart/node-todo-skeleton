app.directive('mainscreen', ['taskApiService', function(taskApiService) {

    ctrl = function() {
        var self = this;
        self.formData = {};
        self.loading = true;
        self.init = function() {
            taskApiService.get()
                .success(function(data) {
                    self.todos = data;
                    self.loading = false;
                })
        };
        self.init();


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
        restrict: "E",
        scope: {},
        bindToController: true,
        controller: ctrl,
        controllerAs: 'vm',
        templateUrl: 'templates/_mainScreen.html'
    };
}]);