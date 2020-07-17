import * as React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom';

type movieFilter = {
  fromYear: string;
  toYear: string;
  language: string;
  genres: [];
};

const dropdownlist = [
  'English',
  'Chinese',
  'French',
  'Spanish',
  'German',
  'Russian',
  'Hebrew',
  'Swedish',
  'Portugese',
  'Italian',
  'Japanese',
  'Korean',
  'Indian',
];

const App = () => {
  //gather all FormData
  //const [lang, setLang] = useState<string>();
  const [formData, setFormData] = useState<movieFilter>({
    fromYear: '',
    toYear: '',
    language: 'English',
    genres: [],
  });

  const { fromYear, toYear, language, genres } = formData;

  return (
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
                      />
                    </div>
                    {/* <input type="hidden" id="dtp_input2" value="" /> */}
                    <label htmlFor="Language Dropdown">
                      Language
                      <select
                        id="language"
                        value={language}
                        onChange={(e) =>
                          setFormData({ ...formData, language: e.target.value })
                        }
                        onBlur={(e) =>
                          setFormData({ ...formData, language: e.target.value })
                        }
                        disabled={!dropdownlist.length}
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
                        <div className="checkbox">
                          <label>
                            <input
                              type="checkbox"
                              id="drama"
                              name="drama"
                              value="drama"
                              className="icheck"
                            />{' '}
                            Drama
                          </label>
                        </div>
                        <div className="checkbox">
                          <label>
                            <input
                              type="checkbox"
                              id="action"
                              name="action"
                              value="action"
                              className="icheck"
                            />{' '}
                            Action
                          </label>
                        </div>
                        <div className="checkbox">
                          <label>
                            <input
                              type="checkbox"
                              id="comedy"
                              name="comedy"
                              value="comedy"
                              className="icheck"
                            />{' '}
                            Comedy
                          </label>
                        </div>
                        <div className="checkbox">
                          <label>
                            <input
                              type="checkbox"
                              id="crime"
                              name="crime"
                              value="crime"
                              className="icheck"
                            />{' '}
                            Crime
                          </label>
                        </div>
                        <div className="checkbox">
                          <label>
                            <input
                              type="checkbox"
                              id="western"
                              name="western"
                              value="western"
                              className="icheck"
                            />{' '}
                            Western
                          </label>
                        </div>
                        <div className="checkbox">
                          <label>
                            <input
                              type="checkbox"
                              id="family"
                              name="family"
                              value="family"
                              className="icheck"
                            />{' '}
                            Family
                          </label>
                        </div>
                        <div className="checkbox">
                          <label>
                            <input
                              type="checkbox"
                              id="documentary"
                              name="documentary"
                              value="documentary"
                              className="icheck"
                            />{' '}
                            Documentary
                          </label>
                        </div>
                        <div className="checkbox">
                          <label>
                            <input
                              type="checkbox"
                              id="thriller"
                              name="thriller"
                              value="thriller"
                              className="icheck"
                            />{' '}
                            Thriller
                          </label>
                        </div>
                        <div className="checkbox">
                          <label>
                            <input
                              type="checkbox"
                              id="mystery"
                              name="mystery"
                              value="mystery"
                              className="icheck"
                            />{' '}
                            Mystery
                          </label>
                        </div>
                      </div>
                      <div className="col-6 px-0">
                        <div className="checkbox">
                          <label>
                            <input
                              type="checkbox"
                              id="war"
                              name="war"
                              value="war"
                              className="icheck"
                            />{' '}
                            War
                          </label>
                        </div>
                        <div className="checkbox">
                          <label>
                            <input
                              type="checkbox"
                              id="fantasy"
                              name="fantasy"
                              value="fantasy"
                              className="icheck"
                            />{' '}
                            Fantasy
                          </label>
                        </div>
                        <div className="checkbox">
                          <label>
                            <input
                              type="checkbox"
                              id="romance"
                              name="romance"
                              value="romance"
                              className="icheck"
                            />{' '}
                            Romance
                          </label>
                        </div>
                        <div className="checkbox">
                          <label>
                            <input
                              type="checkbox"
                              id="adventure"
                              name="adventure"
                              value="adventure"
                              className="icheck"
                            />{' '}
                            Adventure
                          </label>
                        </div>
                        <div className="checkbox">
                          <label>
                            <input
                              type="checkbox"
                              id="animation"
                              name="animation"
                              value="animation"
                              className="icheck"
                            />{' '}
                            Animation
                          </label>
                        </div>
                        <div className="checkbox">
                          <label>
                            <input
                              type="checkbox"
                              id="horror"
                              name="horror"
                              value="horror"
                              className="icheck"
                            />{' '}
                            Horror
                          </label>
                        </div>
                        <div className="checkbox">
                          <label>
                            <input
                              type="checkbox"
                              id="history"
                              name="history"
                              value="history"
                              className="icheck"
                            />{' '}
                            History
                          </label>
                        </div>
                        <div className="checkbox">
                          <label>
                            <input
                              type="checkbox"
                              id="science fiction"
                              name="science fiction"
                              value="science fiction"
                              className="icheck"
                            />{' '}
                            Science Fiction
                          </label>
                        </div>
                        <div className="checkbox">
                          <label>
                            <input
                              type="checkbox"
                              id="music"
                              name="music"
                              value="music"
                              className="icheck"
                            />{' '}
                            Music
                          </label>
                        </div>
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
                              hardships drive humanity to look to the stars and
                              beyond. While a mysterious phenomenon menaces to
                              destroy life on planet Earth, astronaut Roy
                              McBride undertakes a mission across the immensity
                              of space and its many perils to uncover the truth
                              about a lost expedition that decades before boldly
                              faced emptiness and silence in search of the
                              unknown.
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
                              hardships drive humanity to look to the stars and
                              beyond. While a mysterious phenomenon menaces to
                              destroy life on planet Earth, astronaut Roy
                              McBride undertakes a mission across the immensity
                              of space and its many perils to uncover the truth
                              about a lost expedition that decades before boldly
                              faced emptiness and silence in search of the
                              unknown.
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
                              hardships drive humanity to look to the stars and
                              beyond. While a mysterious phenomenon menaces to
                              destroy life on planet Earth, astronaut Roy
                              McBride undertakes a mission across the immensity
                              of space and its many perils to uncover the truth
                              about a lost expedition that decades before boldly
                              faced emptiness and silence in search of the
                              unknown.
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
                              hardships drive humanity to look to the stars and
                              beyond. While a mysterious phenomenon menaces to
                              destroy life on planet Earth, astronaut Roy
                              McBride undertakes a mission across the immensity
                              of space and its many perils to uncover the truth
                              about a lost expedition that decades before boldly
                              faced emptiness and silence in search of the
                              unknown.
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
                              hardships drive humanity to look to the stars and
                              beyond. While a mysterious phenomenon menaces to
                              destroy life on planet Earth, astronaut Roy
                              McBride undertakes a mission across the immensity
                              of space and its many perils to uncover the truth
                              about a lost expedition that decades before boldly
                              faced emptiness and silence in search of the
                              unknown.
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
                              hardships drive humanity to look to the stars and
                              beyond. While a mysterious phenomenon menaces to
                              destroy life on planet Earth, astronaut Roy
                              McBride undertakes a mission across the immensity
                              of space and its many perils to uncover the truth
                              about a lost expedition that decades before boldly
                              faced emptiness and silence in search of the
                              unknown.
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
                              hardships drive humanity to look to the stars and
                              beyond. While a mysterious phenomenon menaces to
                              destroy life on planet Earth, astronaut Roy
                              McBride undertakes a mission across the immensity
                              of space and its many perils to uncover the truth
                              about a lost expedition that decades before boldly
                              faced emptiness and silence in search of the
                              unknown.
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
                              hardships drive humanity to look to the stars and
                              beyond. While a mysterious phenomenon menaces to
                              destroy life on planet Earth, astronaut Roy
                              McBride undertakes a mission across the immensity
                              of space and its many perils to uncover the truth
                              about a lost expedition that decades before boldly
                              faced emptiness and silence in search of the
                              unknown.
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
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
