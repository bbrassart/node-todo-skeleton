angular.module('myTodoApp.services')

	.factory('apiService', ['$resource',function($resource) {
		var response;
		var baseUrl = "/api/todos";
		response = $resource(
			baseUrl, {operator: '@operator'},
			{
				post: {
					method: 'POST'
				},
				get: {
					method: 'GET',
					isArray: true
				}
			}
		);
		return response;
	}]);