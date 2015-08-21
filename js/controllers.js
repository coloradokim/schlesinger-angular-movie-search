// When a user enters a movie title into the search box and clicks the search button,
// make an API call to search for movies using the user input.

app.controller('appController', function ($scope, $http) {
  $http.get('http://www.omdbapi.com/?t=Amadeus&y=&plot=short&r=json')
  .then(function(movieData){
    $scope.bigObject = movieData.data;
  });
  // $http.get = function () {
  //   $http.get('http://www.omdbapi.com/?t=' + 'userInputHere' + '&y=&plot=short&r=json')
  //
  // }

}); //final curly brace and parens
