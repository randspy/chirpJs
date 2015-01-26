"use strict";

describe("Read user's posts", function () {

    beforeEach(module('chirpApp'));

    var controller;
    var scope;
    var content;

    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        content = {
            users :  []
        };

        controller = $controller('ReadPostController', {
            $scope: scope,
            dataContent: content
        });
    }));
});

