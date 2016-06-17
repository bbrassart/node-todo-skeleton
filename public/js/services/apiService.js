app.factory('apiService', ['$resource',function($resource) {
	var response;
	var baseUrl = "/api/:operator/:id";
	response = $resource(
		baseUrl, {operator: '@operator'},
		{
			post: {
				method: 'POST',
				isArray: true
			},
			get: {
				method: 'GET',
				isArray: true
			},
			delete: {
				method: 'DELETE',
				isArray: true
			}
		}
	);
	return response;
}]);