const assert = require("assert");
const { suite } = require("selenium-webdriver/testing");

suite(function (env) {
  describe("Google Search", function () {
    let driver;

    before(async function () {
      driver = await new env.builder().build();
    });

    it(
      ("something",
      async function () {
        await driver.get("https://www.google.com");
        let title = await driver.getTitle();
        let url = await driver.getCurrentUrl();
        console.log("url logged", url);
        assert.equal("Google", title);
      })
    );
    after(async function () {
      await driver.quit();
    });
  });
});
