var app = angular.module("movieSearchApp", ['ngRoute'])

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl:'partials/home.html',
      controller: 'searchController'
    })
});

app.config(function($routeProvider) {
  $routeProvider
    .when('/:varMovie', {
      templateUrl:'partials/show.html',
      controller: 'searchController'
    })
});
