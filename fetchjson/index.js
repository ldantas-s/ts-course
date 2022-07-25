"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var baseURL = 'https://jsonplaceholder.typicode.com';
var url = "".concat(baseURL, "/todos/1");
axios_1["default"].get(url).then(function (response) { return console.log(response.data); });
