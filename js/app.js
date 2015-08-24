var app = angular.module("movieSearchApp", ['ngRoute'])

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl:'partials/home.html',
      controller: 'searchController'
    })
    .when('/:id', {
      templateUrl:'partials/show.html',
      controller: 'showController'
    })
});
