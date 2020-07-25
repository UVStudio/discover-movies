"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderBy = void 0;
var react_1 = __importDefault(require("react"));
exports.OrderBy = function (_a) {
    var onClickVote = _a.onClickVote, onClickPopularity = _a.onClickPopularity;
    return (<div className="dropdown">
      <a className="btn btn-info dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="/#">
        Order By
      </a>

      <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
        <a className="dropdown-item" href="/#" onClick={function (e) { return onClickVote(e); }}>
          Rating
        </a>
        <a className="dropdown-item" href="/#" onClick={function (e) { return onClickPopularity(e); }}>
          Popularity
        </a>
      </div>
    </div>);
};
