const { expect } = require("chai");
const { Builder, By, Key, until } = require("selenium-webdriver");
const webdriver = require("selenium-webdriver");

const loginData = {
  username: "username",
  password: "12345",
};

describe("Checking the form submission: ", function () {
  const driver = new Builder().forBrowser("chrome").build();

  it("successfully submit the data if the given login data is valid ", async () => {
    await driver.get("http://localhost:3000/");

    const usernameInput = await driver.findElement(By.id("username"));
    await usernameInput.sendKeys(loginData.username);

    const passwordInput = await driver.findElement(By.id("password"));
    await passwordInput.sendKeys(loginData.password);

    await driver.findElement(By.id("submit")).click();
    const submitSuccess = await driver
      .wait(until.elementLocated(By.css("h1")))
      .getText();

    expect(submitSuccess).to.equal("Welcome to Website");
  });

  after("fill the form submission", async () => await driver.quit());
});
