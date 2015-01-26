"use strict";

chirpApp.controller('WritePostController', ["$scope", "dataContent", function ($scope, dataContent) {

    $scope.posts = [];
    $scope.writePostForUser = function (username, content, timestamp) {
        var userPost = {postContent : content, timestamp : timestamp};
        dataContent.users[username] = dataContent.users[username] || [];
        dataContent.users[username].push(userPost);
    }

}]);