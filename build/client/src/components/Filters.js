"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Filters = void 0;
var React = __importStar(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
var axios_1 = __importDefault(require("axios"));
var react_1 = require("react");
var dropdownlist_1 = require("../dropdownlist");
var checkboxes_1 = require("../checkboxes");
// type moviesDataArray = {
//   post_path: string;
//   original_title: string;
//   release_date: string;
//   vote_average: string;
//   overview: string;
// };
exports.Filters = function () {
    var _a = react_1.useState({
        fromYear: '',
        toYear: '',
        language: 'en',
        genres: [],
    }), formData = _a[0], setFormData = _a[1];
    var fromYear = formData.fromYear, toYear = formData.toYear, language = formData.language, genres = formData.genres;
    var _b = react_1.useState(checkboxes_1.checkboxes), checkedItems = _b[0], setCheckedItems = _b[1];
    var handleOnChange = react_1.useCallback(function (e) {
        var index = e.target.value;
        var items = __spreadArrays(checkedItems);
        items[index].isChecked = e.target.checked;
        setCheckedItems(items);
        var filteredList = checkedItems
            .filter(function (e) { return e.isChecked; })
            .map(function (f) { return f.name; });
        setFormData(__assign(__assign({}, formData), { genres: genres = filteredList }));
    }, [checkedItems, formData]);
    var moviesDataArray = [];
    var onClickRelease = function (e) {
        e.preventDefault();
        console.log('release');
    };
    function compare(key) {
        return function orderRating(a, b) {
            var comparison = 0;
            if (a[key] > b[key]) {
                comparison = -1;
            }
            else if (a[key] < b[key]) {
                comparison = 1;
            }
            return comparison;
        };
    }
    var emptyDiv = null;
    var onClickVote = function (e) {
        e.preventDefault();
        moviesDataArray.sort(compare('vote_average'));
        react_dom_1.default.render(emptyDiv, document.getElementById('movie-list-table'));
        produceMovieList();
    };
    var onClickPopularity = function (e) {
        e.preventDefault();
        moviesDataArray.sort(compare('popularity'));
        react_dom_1.default.render(emptyDiv, document.getElementById('movie-list-table'));
        produceMovieList();
    };
    var onChange = function (e) {
        var _a;
        e.preventDefault();
        setFormData(__assign(__assign({}, formData), (_a = {}, _a[e.target.name] = e.target.value, _a)));
    };
    function produceMovieList() {
        var movieElement = (<tbody>
        {moviesDataArray &&
            moviesDataArray.map(function (movie, index) { return (<tr key={index + 1}>
              <td className="number text-center">{index + 1}</td>
              <td className="image">
                <img src={movie.poster_path
                ? "https://image.tmdb.org/t/p/w500" + movie.poster_path
                : "/img/noposter.jpg"} alt="movie-poster"/>
              </td>
              <td className="movie">
                <p className="my-1">
                  <strong>{movie.original_title}</strong>
                </p>
                <p className="my-1">
                  <em>Release Date: {movie.release_date}</em>
                </p>
                <p className="my-1">
                  <em>Rating: {movie.vote_average}</em>
                </p>
                <p className="my-1">
                  <em>Popularity: {movie.popularity}</em>
                </p>
                <p className="my-1">{movie.overview}</p>
              </td>
            </tr>); })}
      </tbody>);
        react_dom_1.default.render(movieElement, document.getElementById('movie-list-table'));
    }
    var findMovies = function (formData) { return __awaiter(void 0, void 0, void 0, function () {
        var res, moviesData, _i, moviesData_1, e, error_1, errors;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios_1.default.get("/moviesData", { params: { formData: formData } })];
                case 1:
                    res = _a.sent();
                    moviesData = res.data;
                    for (_i = 0, moviesData_1 = moviesData; _i < moviesData_1.length; _i++) {
                        e = moviesData_1[_i];
                        moviesDataArray.push(e);
                    }
                    moviesDataArray.sort(compare('popularity'));
                    produceMovieList();
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    errors = error_1.response.data.errors;
                    console.log(errors);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var onSubmit = function (e) {
        e.preventDefault();
        findMovies(formData);
    };
    return (<react_1.Fragment>
      <div className="col-md-4">
        <h3 className="grid-title">
          <i className="fa fa-filter"></i> Filters
        </h3>
        <hr />
        <form className="form mb-5" onSubmit={function (e) { return onSubmit(e); }}>
          <h5 className="mt-4 mb-1">Year of Release Range</h5>
          From
          <div className="input-group">
            <input type="text" id="fromYear" name="fromYear" className="form-control mb-2" placeholder="yyyy" value={fromYear} onChange={function (e) { return onChange(e); }}/>
          </div>
          To
          <div className="input-group">
            <input type="text" id="toYear" name="toYear" className="form-control" placeholder="yyyy" value={toYear} onChange={function (e) { return onChange(e); }}/>
          </div>
          <label htmlFor="Language Dropdown" className="langauge-label mr-2">
            Language:{'  '}
          </label>
          <select id="language" name="language" className="btn btn-info dropdown-toggle" value={language} onChange={function (e) { return onChange(e); }}>
            {dropdownlist_1.genreObjList.map(function (genre) { return (<option key={genre.lang} value={genre.code}>
                {genre.lang}
              </option>); })}
          </select>
          <h5 className="mt-4">Genre(s):</h5>
          <div className="row mt-3">
            <div className="col-6 px-0">
              {checkboxes_1.checkboxes.map(function (genre, index) { return (<div key={index} className="checkbox">
                  <input type="checkbox" id={genre.name} name={genre.name} value={index} checked={genre.isChecked} className="icheck" onChange={function (e) { return handleOnChange(e); }}/>{' '}
                  <label>{genre.name}</label>
                </div>); })}
            </div>
          </div>
          <input className="btn btn-info mt-3" type="submit" value="Submit"/>
        </form>
      </div>
      <div className="col-md-8">
        <h2>
          <i className="fa fa-film"></i> Discover Movies
        </h2>
        <hr />
        <div className="row">
          <div className="col-sm-6">
            <div className="dropdown">
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
            </div>
          </div>
          <p className="small mt-2">
            The result will show a maximum of 20 most popular movies per year
            released from the chosen selections in the filters.
          </p>
        </div>
        <div className="table-responsive">
          <table className="table table-hover" id="movie-list-table"></table>
        </div>

        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" aria-label="Previous" href="/#">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="/#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="/#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="/#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" aria-label="Next" href="/#">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </react_1.Fragment>);
};
