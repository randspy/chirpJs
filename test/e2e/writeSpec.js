describe('post page', function() {

    beforeEach(function() {
        browser.get('/js/index.html');
    });

    it('should go to a post page when button page is clicked', function() {

        element(by.id('post')).click();
        expect(browser.getCurrentUrl()).toMatch(/\/post/);
    });
});