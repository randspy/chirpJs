"use strict";

describe("Add a new post for the user", function () {

    beforeEach(module('chirpApp'));

    var controller;
    var scope;
    var content;

    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        content = {
            users :  []
        };

        controller = $controller('WritePostController', {
            $scope: scope,
            dataContent: content
        });
    }));

    describe("User name is not present", function(){
        it("does not add post", function () {
            scope.writePostForUser("","");
            expect(content.users.length).toBe(0);
        });
    });

    describe("User name is present", function(){
        var username = "user";
        var post = "post";
        var currentTime = new Date();

        it("does add a post", function () {
            scope.writePostForUser(username, post, currentTime);
            expect(content.users[username][0].postContent).toEqual(post);
            expect(content.users[username][0].timestamp).toEqual(currentTime);
        });
        it("adds more posts than one to user", function () {
            var secondPost = "post two";
            scope.writePostForUser(username, post);
            scope.writePostForUser(username, secondPost);
            expect(content.users[username][0].postContent).toEqual(post);
            expect(content.users[username][1].postContent).toEqual(secondPost);
        });

    });



});

