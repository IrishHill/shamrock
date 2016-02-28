// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('benefitsApp', ['ionic', 'benefitsApp.controllers', 'benefitsApp.services'])

.constant('params', {
  'server': 'http://192.168.169.10:3000'
})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {

    console.log(ApiAIPlugin);
    ApiAIPlugin.init(
            {
                subscriptionKey: "f1efe8aa-daed-4e16-97a8-0fd14f395afe ", // insert your subscription key here 
                clientAccessToken: "fbd0bfeee8d54c758bfc58c136fa83a2 ", // insert your client access key here 
                lang: "en" // set lang tag from list of supported languages 
            }, 
            function(result) { /* success processing */ },
            function(error) { /* error processing */ }
        );

    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $httpProvider) {

  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];

  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home/home.html',
        controller: 'HomeCtrl'
      }
    }
  })

  .state('app.login', {
    url: '/login',
    views: {
      'menuContent': {
        templateUrl: 'templates/login.html',
        controller: 'LoginCtrl'
      }
    }
  })

  .state('app.dashboard', {
    url: '/dashboard',
    views: {
      'menuContent': {
        templateUrl: 'templates/dashboard.html',
        controller: 'DashboardCtrl'
      }
    }
  })

  .state('app.company', {
    url: '/company',
    views: {
      'menuContent': {
        templateUrl: 'templates/company.html',
        controller: 'CompanyCtrl'
      }
    }
  })

  .state('app.services', {
    url: '/services',
    views: {
      'menuContent': {
        templateUrl: 'templates/services.html',
        controller: 'ServicesCtrl'
      }
    }
  })

  .state('app.benefits', {
    url: '/benefits',
    views: {
      'menuContent': {
        templateUrl: 'templates/benefits.html',
        controller: 'BenefitsCtrl'
      }
    }
  })

  .state('app.employees', {
    url: '/employees',
    views: {
      'menuContent': {
        templateUrl: 'templates/employees.html',
        controller: 'EmployeesCtrl'
      }
    }
  })

  .state('app.compliance', {
    url: '/compliance',
    views: {
      'menuContent': {
        templateUrl: 'templates/compliance.html',
        controller: 'ComplianceCtrl'
      }
    }
  })

  .state('app.settings', {
    url: '/settings',
    views: {
      'menuContent': {
        templateUrl: 'templates/settings.html',
        controller: 'SettingsCtrl'
      }
    }
  })

  .state('app.help', {
    url: '/help',
    views: {
      'menuContent': {
        templateUrl: 'templates/help.html',
        controller: 'HelpCtrl'
      }
    }
  })

  .state('app.logout', {
    url: '/logout',
    views: {
      'menuContent': {
        templateUrl: 'templates/logout.html',
        controller: 'LogoutCtrl'
      }
    }
  })
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
