const chrome = require("selenium-webdriver/chrome");
const webdriver = require("selenium-webdriver");

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
}

module.exports = WebDriver;
