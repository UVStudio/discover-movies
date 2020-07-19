import * as React from 'react';
import { useState, Fragment, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { dropdownlist } from './dropdownlist';
import { checkboxes } from './checkboxes';

type movieFilter = {
  fromYear: string;
  toYear: string;
  language: string;
  genres: [];
};

const App = () => {
  const [formData, setFormData] = useState<movieFilter>({
    fromYear: '',
    toYear: '',
    language: 'English',
    genres: [],
  });

  const { fromYear, toYear, language, genres } = formData;

  const [checkedItems, setCheckedItems] = useState(checkboxes);

  const handleOnChange = useCallback(
    (e: any) => {
      const index = e.target.value;
      let items = [...checkedItems];
      items[index].isChecked = e.target.checked;
      setCheckedItems(items);
    },
    [checkedItems]
  );

  console.log(checkedItems);

  return (
    <Fragment>
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
                        <input
                          type="text"
                          id="fromYear"
                          name="fromYear"
                          className="form-control mb-2"
                          placeholder="yyyy"
                          value={fromYear}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              fromYear: e.target.value,
                            })
                          }
                        />
                      </div>
                      {/* <input type="hidden" id="dtp_input1" value="" /> */}
                      To
                      <div className="input-group">
                        <input
                          type="text"
                          id="toYear"
                          name="toYear"
                          className="form-control"
                          placeholder="yyyy"
                          value={toYear}
                          onChange={(e) =>
                            setFormData({ ...formData, toYear: e.target.value })
                          }
                        />
                      </div>
                      {/* <input type="hidden" id="dtp_input2" value="" /> */}
                      <label htmlFor="Language Dropdown">
                        Language
                        <select
                          id="language"
                          value={language}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              language: e.target.value,
                            })
                          }
                          // onBlur={(e) =>
                          //   setFormData({ ...formData, language: e.target.value })
                          // }
                          // disabled={!dropdownlist.length}
                        >
                          {dropdownlist.map((item) => (
                            <option key={item} value={item}>
                              {item}
                            </option>
                          ))}
                        </select>
                      </label>
                      <h5 className="mt-4">Genre(s):</h5>
                      <div className="row mt-3">
                        <div className="col-6 px-0">
                          {checkboxes.map((genre, index) => (
                            <div key={index} className="checkbox">
                              <input
                                type="checkbox"
                                id={genre.name}
                                name={genre.name}
                                value={index}
                                checked={genre.isChecked}
                                className="icheck"
                                onChange={(e) => handleOnChange(e)}
                              />{' '}
                              {genre.isChecked
                                ? console.log('item check', genre.name)
                                : null}
                              <label>{genre.name}</label>
                            </div>
                          ))}
                        </div>
                      </div>
                      <input
                        className="btn btn-info mt-3"
                        type="submit"
                        value="Submit"
                      />
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
                          <a
                            className="btn btn-info dropdown-toggle"
                            role="button"
                            id="dropdownMenuLink"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            href="/#"
                          >
                            Order By
                          </a>

                          <div
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuLink"
                          >
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
                              <img
                                src="https://image.tmdb.org/t/p/w500/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg"
                                alt=""
                              />
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
                              <img
                                src="https://image.tmdb.org/t/p/w500/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg"
                                alt=""
                              />
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
                              <img
                                src="https://image.tmdb.org/t/p/w500/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg"
                                alt=""
                              />
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
                              <img
                                src="https://image.tmdb.org/t/p/w500/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg"
                                alt=""
                              />
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
                              <img
                                src="https://image.tmdb.org/t/p/w500/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg"
                                alt=""
                              />
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
                              <img
                                src="https://image.tmdb.org/t/p/w500/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg"
                                alt=""
                              />
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
                              <img
                                src="https://image.tmdb.org/t/p/w500/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg"
                                alt=""
                              />
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
                              <img
                                src="https://image.tmdb.org/t/p/w500/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg"
                                alt=""
                              />
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
                          <a
                            className="page-link"
                            aria-label="Previous"
                            href="/#"
                          >
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
    </Fragment>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
