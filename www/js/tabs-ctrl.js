app.controller('TabsCtrl', ['$scope','$state','$ionicTabsDelegate', function($scope, $state, $ionicTabsDelegate){

	$scope.choix = function(c){
		console.log("go");
		$state.go(c);
		//$ionicTabsDelegate.$getByHandle(c).select(0);
	};

}]);