"use strict";

describe("user is not present", function () {

    beforeEach(module('chirpApp'));

    var controller;
    var scope;

    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        controller = $controller('WritePostController', {
            $scope: scope
        });
    }));

    it("does not add content", function () {
        expect(scope.posts.length).toBe(0);
    });
});