const webdriver = require('selenium-webdriver');

const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

describe('Source Loader', () => {
    // e2e tests are too slow for default Mocha timeout
    // this.timeout(10000);

    before(function(done) {
        driver.navigate().to('http://localhost:8080')
        // .then(driver.wait())
        .then(() => done());
    });

    it('Writes script to documents', function(done) {
        let scriptTags = driver.findElement(By.tagName('.autocomplete'));
        console.log(scriptTags);
        driver.wait(until.elementLocated(By.css('.suggestion')));
        driver.findElement(By.css('.suggestion')).click()
        .then(() => done());
    });

    after(function(done) {
        driver.quit()
        .then(() => done())
    });
});