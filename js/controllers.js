var movieControllers = angular.module('movieControllers', []);

var count = 1;

movieControllers.controller('ListController', function($scope, $http){

    $http.jsonp('http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json', {
        params: {
            apikey: 't47cwspvrd5pwh234nkbgakx',
            callback: 'JSON_CALLBACK',
            page_limit: 50,
            page: count
        }
    })
        .success(function (data) {
            $scope.movies = data;
            console.log(data.movies);
        });

});
movieControllers.controller('DetailsController', function($scope, $http, $routeParams){

    $http.jsonp('http://api.rottentomatoes.com/api/public/v1.0/movies/' + $routeParams.id + '.json'

    , {
        params: {
            apikey: 't47cwspvrd5pwh234nkbgakx',
            callback: 'JSON_CALLBACK',
            total: 50
        }
    })
        .success(function (data) {
            $scope.singleMovies = data;
            console.log(data.title);
        });


});

