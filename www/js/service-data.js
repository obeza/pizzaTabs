app.factory('dataService', function ($http, $q ) {
	
	var dataSave =  JSON.parse(window.localStorage.getItem('dataSave'));
	return {
		getEtabId: 2,
		get: function (){
			var promise
			if (!dataSave){
				console.log('dataSave ' + dataSave);
				promise = $http.get('http://localhost:8888/projet-pizza/pizza-service/etab/' + this.getEtabId)
					.then(function(response){
						console.log("service liste : "+ JSON.stringify(response.data));
		   				dataSave = response.data;
		   				window.localStorage.setItem('dataSave',JSON.stringify(dataSave));
		   				//var reponse = { "reponse" : "ok" }
						return dataSave;
		   				
					}, function(response) {
						// probleme de connexion !!!
						console.log("errrorrrr : ");
						var reponse = { "reponse" : "erreur" }
						return reponse;

					});
				return promise;
			} else {
				console.log('data from localStorage');
				var promiseStart = $q.when('start');

				promise = promiseStart.then(function (value) {
				
					//console.log('data ' + dataSave);
					return dataSave;
				});
				return promise;
			}

		}

	}

});