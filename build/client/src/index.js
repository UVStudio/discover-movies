"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
var App = function () {
    return (<div>
      <h2>Hello React</h2>
    </div>);
};
react_dom_1.default.render(<App />, document.querySelector('#root'));
