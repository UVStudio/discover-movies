'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
var express_1 = __importDefault(require('express'));
var moviesData_1 = require('./src/routes/moviesData');
var body_parser_1 = __importDefault(require('body-parser'));
var app = express_1.default();
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(moviesData_1.router);
var PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
  return console.log('Listening to port ' + PORT);
});
