app.directive('userlogin', ['mainService', function(mainService) {

    ctrl = function() {

        var self = this;
        self.newUserData = {};
        self.userData = {};
        self.authenticateUser = function() {
            if (self.userData.password != undefined && self.userData.email != undefined) {
                debugger;
            }
        };
        return self;
    }

    return {
        restrict: "E",
        scope: {},
        bindToController: true,
        controller: ctrl,
        controllerAs: 'vm',
        templateUrl: 'templates/_userLogin.html'
    };
}]);