"use strict";

chirpApp.controller('WritePostController', ["$scope", "dataContent", function ($scope, dataContent) {

    $scope.posts = [];
    $scope.writePostForUser = function (username, content) {
        var userPost = {postContent : content};
        dataContent.users[username] = dataContent.users[username] || [];
        dataContent.users[username].push(userPost);
    }

}]);