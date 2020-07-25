"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pagination = void 0;
var react_1 = __importDefault(require("react"));
exports.Pagination = function (_a) {
    var moviesPerPage = _a.moviesPerPage, totalMovies = _a.totalMovies, paginate = _a.paginate;
    var pageNumbers = [];
    for (var i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
        pageNumbers.push(i);
    }
    return (<div>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {pageNumbers.map(function (number) { return (<li key={number} className="page-item">
              <a onClick={function () { return paginate(number); }} className="page-link" href="/#">
                {number}
              </a>
            </li>); })}
        </ul>
      </nav>
    </div>);
};
