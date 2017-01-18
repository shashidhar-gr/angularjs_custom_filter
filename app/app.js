var myApp = angular.module('myApp', []);


myApp.controller('simpleController', ['$scope', function($scope) {
	$scope.word = "shashidhar";
}]);

myApp.filter('reverse', function() {
	return function(str, upperCase) {

		if(upperCase)
			return str.split('').reverse().join('').toUpperCase()
		
		return str.split('').reverse().join('')
	}
});