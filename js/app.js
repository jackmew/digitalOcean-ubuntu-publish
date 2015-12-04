var app = angular.module('starter', ['ionic']);

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: '/home',
    templateUrl: 'templates/home.html'
  });
  $stateProvider.state('details', {
    url: '/details',
    templateUrl: 'templates/details.html'
  });
  $stateProvider.state('settings', {
    url: '/settings',
    templateUrl: 'templates/settings.html'
  });
  $stateProvider.state('tests', {
    url: '/tests',
    templateUrl: 'templates/tests.html',
  });
  $urlRouterProvider.otherwise('/home');
});
app.controller('HomeCtrl', function($scope, $timeout) {
  /******************** svg circle ************************/
  // inner svg
  $scope.isShowing = true ;
  $scope.isShowAnimate = false ;
  // outer circle
  $scope.isHideCircle = true ;
  $scope.isPopCircle = false ;

  $timeout(function() {
      // inner svg
      $scope.isShowing = false ;
      $scope.isShowAnimate = true ;
      // outer circle
      $scope.isHideCircle = false ;
      $scope.isPopCircle = true ;


      $('.jke-ecgChart').ecgChart({
        // height equal to footer height
        height: 65,
        width: 400
      });
      startPulse();
  }, 4000);

});
app.controller('TestCtrl',function($scope) {

});

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
