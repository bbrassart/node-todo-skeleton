app.factory ('routingService', ['$state', function($state) {
    var self = this;
    self.goTo = function(state) {
        $state.go(state);
    };

    return self;
}]);
