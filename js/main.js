let app = angular.module('TriviaGame', []);

require('./game')(app);
//haven't gotten to filters yet
// require('./filters')(app);

app.config([$routeProvider, function($routeProvider){
  $routeProvider
    .when('/', {
      redirectTo: '/login',
    })
    .when('/login', {
      controller: 'GameController',
      templateUrl: 'templates/login.html',
    })
    .when('/playgame', {
      controller: 'GameController',
      templateUrl: 'templates/playgame.html',
    })
    .when('/gameover', {
      controller: 'GameController',
      templateUrl: 'templates/gameover.html',
    })
    .otherwise({
      templateUrl: 'templates/login.html',
    });
}])
