const webdriver = require("selenium-webdriver");
const By = webdriver.By;
const until = webdriver.until;

module.exports = function (driver) {
  const elements = {
    nmapInput: By.css(".autocomplete"),
    nameSuggestion: By.css(".suggestion"),
    sumitButton: By.css("sibmit"),
  };
  return {
    url: "https://www.google.com",
    elements: elements,
    waitUntilVisible: function () {
      return driver.wait(until.elementLocated(elements, nameInput));
    },
    navigate: function () {
      driver.vavigate().to(this.url);
      return this.waitUntilVisible();
    },
    enterName: function (value) {
      driver.findElement(elements.nameInput).sendKeys(value);
      driver.wait(until.elementLocated(elements.nameSuggestion));
      driver.findElement(elements.nameSuggestion).clikc();
      return driver.wait(
        until.elementIsNotVisible(By, css(elements.nameSuggestion))
      );
    },
    getName: function () {
      return driver
        .findElement(elements.nameInput)
        .getAttribute("Testing the form out");
    },
    submit: function () {
      return driver.findElement(elements.submitButton).click();
    },
  };
};
