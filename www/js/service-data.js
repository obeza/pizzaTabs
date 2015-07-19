app.factory('dataService', function ($http, $q, $interval ) {


	var etabId = 2;

	var dataSave = JSON.parse(window.localStorage.getItem('dataSave'));
	
	return {

		maj : function(){			
			var promise = $http.get('http://localhost:8888/pizza-service/etab/' + etabId)
				.then(function(response){
					//console.log("service liste : "+response);
	   				dataSave = response;
	   				window.localStorage.setItem('dataSave',JSON.stringify(response));
	   				var reponse = { "reponse" : "ok" }
					return reponse;
	   				
				}, function(response) {
					// probleme de connexion !!!
					console.log("errrorrrr : ");
					var reponse = { "reponse" : "erreur" }
					return reponse;

				});
			return promise;
		},
		get: function (){

			var promiseStart = $q.when('start');

			var promise = promiseStart.then(function (value) {
			
				return dataSave;
			});	
			return promise;
		},
		getEtabId: function(){
			return etabId;
		},
		charge: function(){
			$interval(function() {
     			console.log("charge");
  			}, 3000);
		}
	}

});