app.service('userService', ['$http', '$ionicPopover', '$rootScope', function($http, $ionicPopover, $rootScope){		

	this.infos = {};

	this.goLogin = function(){
		console.log('gologin');
		$state.go('tab.menu')
	};

	this.checkLogin = function(){
		if (Object.keys(this.infos).length > 0){
			console.log("login");
			
			return true
		} else {
			console.log("no login");
			//this.popover.show();
			$rootScope.modalLogin.show();
			return false
		}
	};

	

}])