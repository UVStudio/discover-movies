"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_1 = require("react");
var react_dom_1 = __importDefault(require("react-dom"));
var Filters_1 = require("./components/Filters");
var App = function () {
    return (<react_1.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="grid search">
              <div className="grid-body">
                <div className="row">
                  <Filters_1.Filters />
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
