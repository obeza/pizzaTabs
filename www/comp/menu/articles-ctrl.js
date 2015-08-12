app.controller('ArticlesCtrl', ['$scope', 'dataService', '$stateParams', '$ionicModal', function($scope, dataService, $stateParams, $ionicModal){

	dataService.get().then( function(d){
		//console.log( "reponse2 : " + JSON.stringify(d) );
		$scope.articles = d['articles'];

	});

	$scope.catId = $stateParams.catId;

	$scope.indexDe = function(obj){
    	var idx = $scope.articles.indexOf(obj);
    	return idx;
	}

	$scope.voir = function(index){
		console.log("voir");
		$scope.modal.show()


    };

}]);