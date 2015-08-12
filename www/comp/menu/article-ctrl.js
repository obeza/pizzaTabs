app.controller('ArticleCtrl', ['$scope', 'dataService', '$stateParams', 'panier', '$ionicPopup', '$timeout', function($scope, dataService, $stateParams, panier, $ionicPopup, $timeout){

	var artId = $stateParams.artId;
	$scope.article = {};
	$scope.choixTaille = false;
	$scope.btPanier = "";
	//$scope.quantite = {q:0};

	dataService.get().then( function(d){
		//console.log( "reponse2 : " + JSON.stringify(d) );
		$scope.article = d['articles'][artId];
		//console.log( "reponse2 : " + JSON.stringify($scope.article) );

		if ( $scope.article.prix>0){
			$scope.choixTaille = true;
			$scope.article.PanierPrix = $scope.article.prix;
			

		} else {
			$scope.article.PanierPrix = $scope.article.prix2;
			console.log("prix 2 = " + $scope.article.PanierPrix );
			$scope.active = 'prix2';
		}

		$scope.article.quantite = 0;
		$scope.article.total = 0;
	});

	$scope.setActive = function(type) {
	    $scope.active = type;
	    $scope.article.PanierPrix = $scope.article[type];
	    total();
	};

	$scope.isActive = function(type) {
	    //$scope.article.PanierPrix = $scope.article[type];
	    return type === $scope.active;

	};

	$scope.plus = function(){
		$scope.article.quantite += 1; 
		total();
	};

	$scope.moins = function(){
		var q = $scope.article.quantite-1;
		if (q>=0){
			$scope.article.quantite = q;
			total();
		}
	};

	var total = function(){
		$scope.article.total = $scope.article.quantite*$scope.article.PanierPrix;
		$scope.article.total = $scope.article.total.toFixed(2);
	};

	$scope.PanierAjouter = function(){
		console.log("pass : " + $scope.article['quantite']);

		if ($scope.article['quantite']>0){
			panier.ajouter($scope.article);
			
			var alertPopup = $ionicPopup.alert({
     			title: 'Panier',
     			template: 'Cet article a été ajouté',
     			buttons:[]
   			});
   			$timeout(function() {
     			alertPopup.close(); //close the popup after 3 seconds for some reason
  			}, 800);

			console.log("pass");
		}

	};


}]);