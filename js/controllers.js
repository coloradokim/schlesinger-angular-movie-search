app.controller('searchController', function ($scope, $http) {
  $scope.movieSearch = function () {
    $scope.movieName;
    $http.get('http://www.omdbapi.com/?s=' + $scope.movieName)
      .then(function(movieData) {
        $scope.moviesArray = movieData.data.Search;
      })
    }
  // $scope.showClick = function (){
  //   $scope.clickName;
  //   $http.get('http://www.omdbapi.com/?t=', { params: {name: movieName}})
  //   .then(function(showData) {
  //     $scope.showData = showData.data;
  //   })
  // }
}); //final curly brace and parens for searchController



app.controller('showController', function ($scope, $http) {
    $http.get('http://www.omdbapi.com/?t=Babe')
    .then(function(showData) {
      $scope.showData = showData.data;
  })
})
