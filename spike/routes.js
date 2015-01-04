chirpApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/showPosts.html',
            controller: 'showPostsController'
        })
        .when('/post', {
            templateUrl: 'pages/showPosts.html',
            controller: 'showPostsController'
        })
        .when('/newPost', {
            templateUrl: 'pages/newPost.html',
            controller: 'newPostController'
        })
        .when('/follow', {
            templateUrl: 'pages/follow.html',
            controller: 'followController'
        })
        .when('/wall', {
            templateUrl: 'pages/wall.html',
            controller: 'wallController'
        });
});