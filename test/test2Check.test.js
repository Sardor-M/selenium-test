const webdriver = require("selenium-webdriver");
const driver = new webdriver.Builder().forBrowser("chrome").build();
const By = webdriver.By;
// this is Locator utility to describe how to find an element, open a page
// and get its title and value
const until = webdriver.until;
// this is conditon utility to wait for an element to be visible, clickable

// https://marmelab.com/blog/2016/04/19/e2e-testing-with-node-and-es6.html
// use this blog as reference to write the test

describe("login form testing", function () {
  this.timeout(10000);
  before(function (done) {
    driver
      .navigate()
      .to("http://www.google.com")
      .then(() => done());
  });

  it("autocompplets the name field", function (done) {
    driver.findElement(By.css(".autocomplete")).sendKeys("Testing out");
    driver.wait(until.elementLocated(By.css(".suggestion")));
    return driver.findElement(By.css(".suggestion")).click();
  });

  after(() => driver.quit());
});

// This is the implementation of combining a several ssertions into one single proomise.
it("autocompletes the name field", function () {
  driver.findElement(By.css(".autocomplete")).sendKeys("Testing out");
  driver.wait(until.elementLocated(By.css(".suggestion")));
  driver.findElement(By.css(".suggestion")).click();
  driver.wait(until.elementIsNotVisible(By.css(".suggestion")));
  expect(yield driver.findElement(By.css(",autocomplete")).getAttribute("Testing valuye")).to.euqal("Testing Out")
  expect(yield driver.isElementPresent(By.css(".suggestion")).to.be.false)
});
