// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var app = angular.module('starter', ['ionic'])

.run(function($ionicPlatform, $rootScope, $ionicModal, userService) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });

  $rootScope.quantite = 0;
/*
  $ionicPopover.fromTemplateUrl('comp/utilisateur/login-template.html', {
          scope: $rootScope,
          animation: 'slide-in-up'
        }).then(function(popover) {
          userService.popover = popover;
        });
*/

  $ionicModal.fromTemplateUrl('comp/utilisateur/login-template.html', {
          animation: 'slide-in-up'
        }).then(function(modal) {
          $rootScope.modalLogin = modal;
        }); 


})

.config(['$ionicConfigProvider',function($ionicConfigProvider) {

  $ionicConfigProvider.tabs.position('bottom');
  $ionicConfigProvider.tabs.style('standard');
  $ionicConfigProvider.backButton.previousTitleText(false)
  $ionicConfigProvider.backButton.text('Retour');
  $ionicConfigProvider.views.maxCache(0);

}])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  .state('tab', {
    url: "/tab",
    abstract: true,
    data: { requireLogin: false },
    templateUrl: "templates/tabs.html"
  })

  .state('tab.menu', {
    url: '/menu',
    data: { requireLogin: false },
    views: {
      'tab-menu': {
        templateUrl: 'comp/menu/menu-template.html',
        controller: 'MenuCtrl'
      }
    }
  })

  .state('tab.menu-articles', {
    url: '/menu/articles/:catId',
    views: {
      'tab-menu': {
        templateUrl: 'comp/menu/articles-template.html',
        controller: 'ArticlesCtrl'
      }
    }
  })

  .state('tab.menu-article', {
    url: '/menu/article/:artId',
    views: {
      'tab-menu': {
        templateUrl: 'comp/menu/article-template.html',
        controller: 'ArticleCtrl'
      }
    }
  }) 

  .state('tab.panier', {
    url: '/panier',
    views: {
      'tab-panier': {
        templateUrl: 'comp/panier/liste-template.html',
        controller: 'PanierCtrl'
      }
    }
  }) 
  .state('tab.panier-article', {
    url: '/panier/modifier/:artId',
    views: {
      'tab-panier': {
        templateUrl: 'comp/panier/modifier-template.html',
        controller: 'PanierModifierCtrl'
      }
    }
  })

  .state('tab.points', {
    url: '/points',
    views: {
      'tab-points': {
        templateUrl: 'comp/utilisateur/points-template.html',
        controller: 'PointsCtrl'
        
        },
      }
  })

  .state('tab.inscription', {
    url: '/points/inscription',
    views: {
      'tab-points': {
        templateUrl: 'comp/utilisateur/inscription-template.html',
        controller: 'PointsInscriptionCtrl'
        
        },
      }
  })

/*
  .state('login', {
    url: '/login',
    views: {
      'tab-points': {
        templateUrl: 'comp/utilisateur/login-template.html',
        controller: 'LoginCtrl'
        
        },
      }    
    
  })
*/
  .state('tab.infos', {
    url: '/infos',

    views: {
      'tab-points': {
        templateUrl: 'comp/utilisateur/infos-template.html',

        controller: 'InfosCtrl'
      }
    }
  })


  ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/menu');

});
