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
var React = __importStar(require("react"));
var react_1 = require("react");
var react_dom_1 = __importDefault(require("react-dom"));
var dropdownlist_1 = require("./dropdownlist");
var checkboxes_1 = require("./checkboxes");
var App = function () {
    var _a = react_1.useState({
        fromYear: '',
        toYear: '',
        language: 'English',
        genres: [],
    }), formData = _a[0], setFormData = _a[1];
    var fromYear = formData.fromYear, toYear = formData.toYear, language = formData.language, genres = formData.genres;
    var _b = react_1.useState(checkboxes_1.checkboxes), checkedItems = _b[0], setCheckedItems = _b[1];
    var handleOnChange = react_1.useCallback(function (e) {
        var index = e.target.value;
        var items = __spreadArrays(checkedItems);
        items[index].isChecked = e.target.checked;
        setCheckedItems(items);
    }, [checkedItems]);
    console.log(checkedItems);
    return (<react_1.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="grid search">
              <div className="grid-body">
                <div className="row">
                  <div className="col-md-4">
                    <h3 className="grid-title">
                      <i className="fa fa-filter"></i> Filters
                    </h3>
                    <hr />

                    <form className="form">
                      <h5 className="mt-4 mb-1">Year of Release Range</h5>
                      <p className="small mt-0 mb-2 low-line-height">
                        Please choose range of no more than 3 years. (eg
                        2011-2013)
                      </p>
                      From
                      <div className="input-group">
                        <input type="text" id="fromYear" name="fromYear" className="form-control mb-2" placeholder="yyyy" value={fromYear} onChange={function (e) {
        return setFormData(__assign(__assign({}, formData), { fromYear: e.target.value }));
    }}/>
                      </div>
                      
                      To
                      <div className="input-group">
                        <input type="text" id="toYear" name="toYear" className="form-control" placeholder="yyyy" value={toYear} onChange={function (e) {
        return setFormData(__assign(__assign({}, formData), { toYear: e.target.value }));
    }}/>
                      </div>
                      
                      <label htmlFor="Language Dropdown">
                        Language
                        <select id="language" value={language} onChange={function (e) {
        return setFormData(__assign(__assign({}, formData), { language: e.target.value }));
    }}>
                          {dropdownlist_1.dropdownlist.map(function (item) { return (<option key={item} value={item}>
                              {item}
                            </option>); })}
                        </select>
                      </label>
                      <h5 className="mt-4">Genre(s):</h5>
                      <div className="row mt-3">
                        <div className="col-6 px-0">
                          {checkboxes_1.checkboxes.map(function (genre, index) { return (<div key={index} className="checkbox">
                              <input type="checkbox" id={genre.name} name={genre.name} value={index} checked={genre.isChecked} className="icheck" onChange={function (e) { return handleOnChange(e); }}/>{' '}
                              {genre.isChecked
        ? console.log('item check', genre.name)
        : null}
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
                            <a className="dropdown-item" href="/#">
                              Rating
                            </a>
                            <a className="dropdown-item" href="/#">
                              Name
                            </a>
                            <a className="dropdown-item" href="/#">
                              Date
                            </a>
                            <a className="dropdown-item" href="/#">
                              Popularity
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="table-responsive">
                      <table className="table table-hover">
                        <tbody>
                          <tr>
                            <td className="number text-center">1</td>
                            <td className="image">
                              <img src="https://image.tmdb.org/t/p/w500/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg" alt=""/>
                            </td>
                            <td className="movie">
                              <p className="float-left">
                                <strong>Ad Astra</strong>
                              </p>
                              <p className="float-left ml-4">2019-09-17</p>
                              <p className="float-right ml-4">Rating: 6.1</p>
                              <p className="float-left mt-0">
                                The near future, a time when both hope and
                                hardships drive humanity to look to the stars
                                and beyond. While a mysterious phenomenon
                                menaces to destroy life on planet Earth,
                                astronaut Roy McBride undertakes a mission
                                across the immensity of space and its many
                                perils to uncover the truth about a lost
                                expedition that decades before boldly faced
                                emptiness and silence in search of the unknown.
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td className="number text-center">2</td>
                            <td className="image">
                              <img src="https://image.tmdb.org/t/p/w500/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg" alt=""/>
                            </td>
                            <td className="movie">
                              <p className="float-left">
                                <strong>Ad Astra</strong>
                              </p>
                              <p className="float-left ml-4">2019-09-17</p>
                              <p className="float-right ml-4">Rating: 6.1</p>
                              <p className="float-left mt-0">
                                The near future, a time when both hope and
                                hardships drive humanity to look to the stars
                                and beyond. While a mysterious phenomenon
                                menaces to destroy life on planet Earth,
                                astronaut Roy McBride undertakes a mission
                                across the immensity of space and its many
                                perils to uncover the truth about a lost
                                expedition that decades before boldly faced
                                emptiness and silence in search of the unknown.
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td className="number text-center">3</td>
                            <td className="image">
                              <img src="https://image.tmdb.org/t/p/w500/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg" alt=""/>
                            </td>
                            <td className="movie">
                              <p className="float-left">
                                <strong>Ad Astra</strong>
                              </p>
                              <p className="float-left ml-4">2019-09-17</p>
                              <p className="float-right ml-4">Rating: 6.1</p>
                              <p className="float-left mt-0">
                                The near future, a time when both hope and
                                hardships drive humanity to look to the stars
                                and beyond. While a mysterious phenomenon
                                menaces to destroy life on planet Earth,
                                astronaut Roy McBride undertakes a mission
                                across the immensity of space and its many
                                perils to uncover the truth about a lost
                                expedition that decades before boldly faced
                                emptiness and silence in search of the unknown.
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td className="number text-center">4</td>
                            <td className="image">
                              <img src="https://image.tmdb.org/t/p/w500/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg" alt=""/>
                            </td>
                            <td className="movie">
                              <p className="float-left">
                                <strong>Ad Astra</strong>
                              </p>
                              <p className="float-left ml-4">2019-09-17</p>
                              <p className="float-right ml-4">Rating: 6.1</p>
                              <p className="float-left mt-0">
                                The near future, a time when both hope and
                                hardships drive humanity to look to the stars
                                and beyond. While a mysterious phenomenon
                                menaces to destroy life on planet Earth,
                                astronaut Roy McBride undertakes a mission
                                across the immensity of space and its many
                                perils to uncover the truth about a lost
                                expedition that decades before boldly faced
                                emptiness and silence in search of the unknown.
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td className="number text-center">5</td>
                            <td className="image">
                              <img src="https://image.tmdb.org/t/p/w500/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg" alt=""/>
                            </td>
                            <td className="movie">
                              <p className="float-left">
                                <strong>Ad Astra</strong>
                              </p>
                              <p className="float-left ml-4">2019-09-17</p>
                              <p className="float-right ml-4">Rating: 6.1</p>
                              <p className="float-left mt-0">
                                The near future, a time when both hope and
                                hardships drive humanity to look to the stars
                                and beyond. While a mysterious phenomenon
                                menaces to destroy life on planet Earth,
                                astronaut Roy McBride undertakes a mission
                                across the immensity of space and its many
                                perils to uncover the truth about a lost
                                expedition that decades before boldly faced
                                emptiness and silence in search of the unknown.
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td className="number text-center">6</td>
                            <td className="image">
                              <img src="https://image.tmdb.org/t/p/w500/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg" alt=""/>
                            </td>
                            <td className="movie">
                              <p className="float-left">
                                <strong>Ad Astra</strong>
                              </p>
                              <p className="float-left ml-4">2019-09-17</p>
                              <p className="float-right ml-4">Rating: 6.1</p>
                              <p className="float-left mt-0">
                                The near future, a time when both hope and
                                hardships drive humanity to look to the stars
                                and beyond. While a mysterious phenomenon
                                menaces to destroy life on planet Earth,
                                astronaut Roy McBride undertakes a mission
                                across the immensity of space and its many
                                perils to uncover the truth about a lost
                                expedition that decades before boldly faced
                                emptiness and silence in search of the unknown.
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td className="number text-center">7</td>
                            <td className="image">
                              <img src="https://image.tmdb.org/t/p/w500/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg" alt=""/>
                            </td>
                            <td className="movie">
                              <p className="float-left">
                                <strong>Ad Astra</strong>
                              </p>
                              <p className="float-left ml-4">2019-09-17</p>
                              <p className="float-right ml-4">Rating: 6.1</p>
                              <p className="float-left mt-0">
                                The near future, a time when both hope and
                                hardships drive humanity to look to the stars
                                and beyond. While a mysterious phenomenon
                                menaces to destroy life on planet Earth,
                                astronaut Roy McBride undertakes a mission
                                across the immensity of space and its many
                                perils to uncover the truth about a lost
                                expedition that decades before boldly faced
                                emptiness and silence in search of the unknown.
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td className="number text-center">8</td>
                            <td className="image">
                              <img src="https://image.tmdb.org/t/p/w500/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg" alt=""/>
                            </td>
                            <td className="movie">
                              <p className="float-left">
                                <strong>Ad Astra</strong>
                              </p>
                              <p className="float-left ml-4">2019-09-17</p>
                              <p className="float-right ml-4">Rating: 6.1</p>
                              <p className="float-left mt-0">
                                The near future, a time when both hope and
                                hardships drive humanity to look to the stars
                                and beyond. While a mysterious phenomenon
                                menaces to destroy life on planet Earth,
                                astronaut Roy McBride undertakes a mission
                                across the immensity of space and its many
                                perils to uncover the truth about a lost
                                expedition that decades before boldly faced
                                emptiness and silence in search of the unknown.
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </react_1.Fragment>);
};
react_dom_1.default.render(<App />, document.querySelector('#root'));
