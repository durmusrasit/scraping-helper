const chrome = require("selenium-webdriver/chrome");
const webdriver = require("selenium-webdriver");
const { until, By } = require("selenium-webdriver");

class WebDriver {
  constructor(debuggerAddress, webAddress) {
    this.options = new chrome.Options();
    this.options.debuggerAddress(debuggerAddress);
    this.driver = new webdriver.Builder()
      .withCapabilities(this.options)
      .build();
    this.webAddress = webAddress;
  }

  async start() {
    await this.driver.get(this.webAddress);
  }

  async findAndClickByXPath(xpath) {
    const locateElement = await this.driver.wait(
      until.elementLocated(By.xpath(xpath))
    );
    if (locateElement) await this.driver.findElement(By.xpath(xpath)).click();
  }

  async findAndSendKeysByXPath(xpath, keys) {
    const locateElement = await this.driver.wait(
      until.elementLocated(By.xpath(xpath))
    );
    if (locateElement)
      await this.driver.findElement(By.xpath(xpath)).sendKeys(keys);
  }
}

module.exports = WebDriver;
