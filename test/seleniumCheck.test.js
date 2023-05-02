const { expect } = require("chai");
const { Builder, By, Key, until } = require("selenium-webdriver");

describe("making sure the test works", function () {
  it("coorectly adds two numbers", () => {
    const sum = 1 + 2;
    expect(sum).to.equal(3);
  });
});

describe("making sure the sele is working", function () {
  const driver = new Builder().forBrowser("chrome").build();
  it("navigates to web app and gets title", async function () {
    await driver.get("http://localhost:3000");
    const title = await driver.getTitle();

    expect(title).to.equal("Web Driver Test");
  });

  after("close the borwser", async function () {
    await driver.quit();
  });
});

describe("other selenium test check", function () {
  const driver = new Builder().forBrowser("chrome").build();
  it("navigates to web app and gets the text header", async function () {
    await driver.get("http://localhost:3000/");
    const header = await driver.findElement(By.id("header")).getText();

    expect(header).to.equal("Web Driver Selenium Test");
  });
  after("close the browser", async function () {
    await driver.quit();
  });
});
