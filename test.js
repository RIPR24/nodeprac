const { randomBytes, createCipheriv } = require("crypto");
const fs = require("fs");
const path = require("path");
var vi, key;

const savePass = (email, pass) => {
  fs.readFile(path.join(__dirname, "files", "vi.txt"), (err, data) => {
    if (err) {
      vi = randomBytes(16).toString("hex");
      key = randomBytes(32).toString("hex");
      fs.writeFile(
        path.join(__dirname, "files", "vi.txt"),
        vi + "," + key,
        (err) => {
          if (err) console.log(err);
          else console.log("created", vi.toString());
        }
      );
    } else {
      [vi, key] = data.toString().split(",");
    }
  });
};

savePass("abc", "pass123");
