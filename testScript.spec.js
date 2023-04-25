const { By, Browser } = require("selenium-webdriver");
const assert = require("assert");
const { suite } = require("selenium-webdriver/testing");

suite(
  function (env) {
    describe("Google Search", function () {
      let driver;
      before(async function () {
        driver = await new env.Builder().forBrowser("chrome").build();
      });
      after(async function () {
        await driver.quit();
      });
      it("Google Search ", async function () {
        await driver.get("https://www.google.com");

        let title = await driver.getTitle();
        assert.equal("Web Driver Test", title);

        await driver.manager().setTimeouts({ implicit: 10000 });

        let textBox = await driver.findElement(By.name("step-current"));
        let submitButton = await driver.findElement(
          By.css('button[type="submit"]')
        );

        await textBox.sendKeys("Google Search");
        await submitButton.click();

        let logs = await driver.manage().logs().get("browser");
        console.log(logs);

        let message = await driver.findElement(By.id("message"));
        let value = await message.getText();
        assert.equal("Google Search", value);
      });
    });
  },
  { browsers: [Browser.CHROME, Browser.FIREFOX] }
);

// // Path: testScript.spec.js
