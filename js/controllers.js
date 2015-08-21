// When a user enters a movie title into the search box and clicks the search button,
// make an API call to search for movies using the user input.

app.controller('searchController', function ($scope, $http) {
  $scope.movieSearch = function () {
    $scope.movieName;
    $http.get('http://www.omdbapi.com/?s=' + $scope.movieName)
      .then(function(movieData){
        $scope.bigObject = movieData.data;
  });
}

}); //final curly brace and parens
