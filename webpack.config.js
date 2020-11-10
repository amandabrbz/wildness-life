const path = require("path");

module.exports = {
  entry: ["@babel/polyfill", "whatwg-fetch", "./script/main.js"],
  output: {
    path: path.resolve(__dirname, "./script/dist"),
    filename: "main.js",
  },
};