class Logger {
  enabled = false;

  get loggerEnabled() {
    return this.enabled;
  }

  set loggerEnabled(value) {
    this.enabled = value;
  }

  print(text) {
    if (this.enabled) {
      console.log("LOG:", text);
    }
  }
}

module.exports = Logger;
