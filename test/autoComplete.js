const webdriver = require("selenium-webdriver");

const By = webdriver.By;

const test4 = require("./test3Check.test")(driver);

before(() => test4.navigate());

it("autocompletes the name field", function* () {
  homepage.enterName("testing out");
  expect(yield test4.getName()).to.equal("Testing out the form");
});
