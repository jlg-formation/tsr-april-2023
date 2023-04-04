const fs = require("fs");
const util = require("util");

const readdir = util.promisify(fs.readdir);
const readFile = util.promisify(fs.readFile);

readdir(".")
  .then((files) => {
    console.log("files: ", files);
    return readFile(files[0], { encoding: "utf-8" });
  })
  .then((content) => {
    console.log("content: ", content);
  })
  .catch((err) => {
    console.log("err: ", err);
  });
