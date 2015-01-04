chirpApp.service('chirpData', function() {

    this.users = [];
});

chirpApp.controller('showPostsController', ['$scope', 'chirpData', function($scope, chirpData) {
    for (var idx = 0; idx < chirpData.users.length; idx++){
        if ($scope.username === chirpData.users[idx]["username"]){
            if ($scope.posts == undefined)
            {
                $scope.posts = [];
            }
            $scope.posts.push(chirpData.users[idx]["value"]);
        }
    }

    console.log($scope.posts);
}]);

chirpApp.controller('newPostController', ['$scope', 'chirpData', function($scope, chirpData) {

    $scope.writeNewPost = function(username){
        var newPostObj = {};
        newPostObj['username'] = $scope.username;
        newPostObj['value'] = $scope.newPost;
        chirpData.users.push(newPostObj);
        console.log(chirpData);
    };
}]);

chirpApp.controller('followController', ['$scope', function($scope) {
    console.log("followController")
}]);

chirpApp.controller('wallController', ['$scope', function($scope) {
    console.log("wallController")
}]);