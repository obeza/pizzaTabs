app.controller('PointsCtrl', ['$scope', 'userService', '$rootScope', function($scope, userService, $rootScope){
	

	$scope.test = "ok";

	//
	// check si l'utilisateur est connecté
	//
	console.log('point ctrl');
	userService.checkLogin();
	




}])