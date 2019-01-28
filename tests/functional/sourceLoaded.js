const { Builder, By } = require('selenium-webdriver');

const driver = new Builder().forBrowser('chrome').build();


describe('Source Loader', function() {
    // e2e tests are too slow for default Mocha timeout
    this.timeout(10000);

    before(function(done) {
        driver.navigate().to('http://localhost:8080')
        .then(() => done());
    });

    it('Writes script tags to documents', function(done) {
      driver.navigate().to('http://localhost:8080')
        .then(() => done());
        driver.findElement(By.css("script[src^='./src/exampleFiles']"));
    });

    after(function(done) {
        driver.quit()
        .then(() => done())
    });
});
