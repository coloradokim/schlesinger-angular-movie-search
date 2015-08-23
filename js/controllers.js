app.controller('searchController', function ($scope, $http) {
  $scope.movieSearch = function () {
    $scope.movieName;
    $http.get('http://www.omdbapi.com/?s=' + $scope.movieName)
      .then(function(movieData) {
        $scope.moviesArray = movieData.data.Search;
  })
}
  $scope.showClick = function () {
    $http.get('http://www.omdbapi.com/?t=Babe')
    .then(function(showData) {
      $scope.showData = showData;
    })
  }
}); //final curly brace and parens
