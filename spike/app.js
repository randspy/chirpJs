var chirpApp = angular.module('chirpApp', ['ngRoute']);

chirpApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/post.html',
            controller: 'postController'
        })
        .when('/post', {
            templateUrl: 'pages/post.html',
            controller: 'postController'
        })
        .when('/wall', {
            templateUrl: 'pages/wall.html',
            controller: 'wallController'
        });
});

chirpApp.controller('postController', ['$scope', function($scope) {
    console.log("post")
}]);


chirpApp.controller('wallController', ['$scope', function($scope) {
    console.log("wall")
}]);