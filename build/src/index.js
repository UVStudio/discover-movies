"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var moviesData_1 = require("./routes/moviesData");
var path_1 = __importDefault(require("path"));
var body_parser_1 = __importDefault(require("body-parser"));
require("dotenv/config");
var app = express_1.default();
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(moviesData_1.router);
//Serve static assets in production
if (process.env.NODE_ENV === 'production') {
    //set static folder
    app.use(express_1.default.static('client/build'));
    app.get('*', function (req, res) {
        res.sendFile(path_1.default.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}
var PORT = process.env.PORT || 5000;
app.listen(PORT, function () { return console.log("Listening to port " + PORT); });
///notes
