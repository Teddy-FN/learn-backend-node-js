const fs = require("fs");
const path = require("path");

// Import utils
const dirname = require("../utils/path");

module.exports = class Home {
  constructor(t) {
    this.name = t.name;
    this.message = t.message;
    this.id = t.id;
  }

  save() {
    const p = path.join(dirname, "data", "data.json");
    fs.readFile(p, (err, fileContent) => {
      let users = [];
      if (!err) {
        users = JSON.parse(fileContent);
      }
      users.push(this);
      fs.writeFile(p, JSON.stringify(users), (err) => {
        console.log("ERR =>", err);
      });
    });
  }

  static getAllMessage(cb) {
    const p = path.join(dirname, "data", "data.json");

    fs.readFile(p, (err, fileContent) => {
      if (err) {
        cb([]);
      }
      cb(JSON.parse(fileContent));
    });
  }

  // Find by id
  static findById(id, cb) {
    const p = path.join(dirname, "data", "data.json");
    fs.readFile(p, (err, fileContent) => {
      let data = [];
      if (err) {
        data = [];
      }
      data = JSON.parse(fileContent);
      const findDataById = data.find((user) => user.id === Number(id));

      cb(findDataById, data);
    });
  }
};
