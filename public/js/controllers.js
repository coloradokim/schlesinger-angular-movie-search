app.controller('searchController', function ($scope, $http, $routeParams, $location) {
    $scope.movieName;
    $scope.movieSearch = function(movieName) {
    $http.get('http://www.omdbapi.com/?s=' + $scope.movieName)
      .then(function(movieData) {
        $location.path('/')
        $scope.moviesArray = movieData.data.Search;
      });
    }
});

app.controller('showController', function ($scope, $http, $routeParams) {
  $scope.showData;
  $http.get('http://www.omdbapi.com/?i=' + $routeParams.id)
    .then(function(showData) {
      $scope.showData = showData.data;
      console.log($routeParams.id);
  })
});
