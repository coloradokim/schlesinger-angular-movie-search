app.controller('appController', function ($scope, $http) {
  $http.get('http://www.omdbapi.com/?t=Amadeus&y=&plot=short&r=json')
  .then(function(movieData){
    $scope.bigObject = movieData.data;
  });
});
