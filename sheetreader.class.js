const xlsx = require("xlsx");

class SheetReader {
  data = [];

  constructor(sheetFile) {
    this.file = xlsx.readFile(sheetFile);
  }

  getSheetData() {
    for (const sheetName of this.file.SheetNames) {
      const temp = xlsx.utils.sheet_to_json(this.file.Sheets[sheetName]);

      temp.forEach((el) => {
        this.data.push(el);
      });
    }

    return this.data;
  }
}

module.exports = SheetReader;
