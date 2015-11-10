var data;
var newSongs;
var relatedUrl = 'http://developer.echonest.com/api/v4/artist/similar?api_key=XHOSVALOFCIWRIRZ7&name='
//Angular module
var myApp = angular.module('myApp', [])

//Angular controller 
var myCtrl = myApp.controller('myCtrl', function($scope, $http) {
  //Function that gatheres related artists 
  $scope.getArtists = function() {
    $('li').empty();
    if (!$scope.lastname) {
      $http.get(relatedUrl + $scope.firstname).success(function(response) {
        data = $scope.artists = response.response.artists;
      })
    } else {
      $http.get(relatedUrl + $scope.firstname + $scope.lastname).success(function(response){
        data = $scope.artists = response.response.artists;
      })
    }
  }

  //Function that gatheres songs for the selected related artist
  $scope.getSongs = function(selectedArtistId) {
    console.log(selectedArtistId);
    $http.get('http://developer.echonest.com/api/v4/artist/songs?api_key=XHOSVALOFCIWRIRZ7&id=' + selectedArtistId + '&format=json&start=0').success(function(response) {
      newSongs = $scope.songList = response.response.songs;
    })
  }
})

