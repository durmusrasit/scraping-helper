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

  async findAndClickElementByXPath(xpath) {
    const locateElement = await this.driver.wait(
      until.elementLocated(By.xpath(xpath))
    );
    if (locateElement) await this.driver.findElement(By.xpath(xpath)).click();
  }
}

module.exports = WebDriver;
