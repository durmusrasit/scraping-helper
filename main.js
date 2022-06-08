const WebDriver = require("./webdriver.class");

const sliceArgv = process.argv.slice(2);

const debuggerAddress = sliceArgv[0];
const webAddress = sliceArgv[1];

function program() {
  const driver = new WebDriver(debuggerAddress, webAddress);

  driver.start();
}

program();
