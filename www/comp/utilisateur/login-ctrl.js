app.controller('LoginCtrl', ['$scope', '$ionicHistory', '$rootScope', function($scope, $ionicHistory, $rootScope){
	
	$scope.test = "login";

	//$rootScope.modalLogin.show();
	console.log('login modal');

	$scope.fermer = function(){
		$ionicHistory.goBack();
		$rootScope.modalLogin.hide();
	}
	
	$scope.fermerModal = function(){
		$rootScope.modalLogin.hide();
	}


}]);