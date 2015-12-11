var app = angular.module('starter', ['ionic','gist-embed']);

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
  $stateProvider.state('logbook', {
    url: '/logbook',
    templateUrl: 'templates/logbook.html'
  });
  // $stateProvider.state('book', {
  //   url: '/book/:bookId',
  //   templateUrl: 'templates/book.html'
  // });
  $stateProvider.state('cordova1', {
    url: '/book/cordova1',
    templateUrl: 'templates/cordova1.html'
  });
  $stateProvider.state('cordova2', {
    url: '/book/cordova2',
    templateUrl: 'templates/cordova2.html'
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
app.controller('LogbookCtrl',function($scope, $http) {
    // $scope.books = [];
    // $http.get('https://www.reddit.com/r/Android/new/.json')
    //   .success(function(response) {
    //   angular.forEach(response.data.children, function(child) {
    //       var story = child.data ;
    //       console.log(story.thumbnail);
    //       if(!story.thumbnail || story.thumbnail === 'self' || story.thumbnail == 'default') {
    //         story.thumbnail = 'http://www.redditstatic.com/icon.png' ;
    //       }
    //       $scope.books.push(child.data);
    //   });
    // });
});
app.controller('BookCtrl', function($scope, $state) {
  
  // console.log($state.params.bookId);
  // $scope.bookId = $state.params.bookId;

  // $rootScope.$on('$includeContentLoaded', function() {
  //     alert("included");
      // initialize gist on new elements
      // angular.element(document).ready(function() {
      //     if (typeof(angular.element(document).gist) === 'function') {
      //         angular.element('[data-gist-id]').gist();
      //     }
      // });
  // });
    // $scope.$on('$ionicView.enter', function () {
    //     alert("loaded");
    // });
    // $scope.$on('$ionicView.unloaded', function (viewInfo, state) {
    //     console.log('CTRL - $ionicView.unloaded', viewInfo, state);
    // });
    angular.element(document).ready(function() {
        if (typeof(angular.element(document).gist) === 'function') {
            angular.element('[data-gist-id]').gist();
        }
    });
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
