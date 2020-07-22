import * as React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { useState, Fragment, useCallback } from 'react';
import { genreObjList } from '../dropdownlist';
import { checkboxes } from '../checkboxes';

type movieFilter = {
  fromYear: string;
  toYear: string;
  language: string;
  genres: string[];
};

// type moviesDataArray = {
//   post_path: string;
//   original_title: string;
//   release_date: string;
//   vote_average: string;
//   overview: string;
// };

export const Filters = () => {
  const [formData, setFormData] = useState<movieFilter>({
    fromYear: '',
    toYear: '',
    language: 'en',
    genres: [],
  });

  let { fromYear, toYear, language, genres } = formData;

  const [checkedItems, setCheckedItems] = useState(checkboxes);

  // const [movieList, setMovieList] = useState()
  // const movieObj {
  //   name: ""
  // }

  const handleOnChange = useCallback(
    (e: any) => {
      const index = e.target.value;
      let items = [...checkedItems];
      items[index].isChecked = e.target.checked;
      setCheckedItems(items);
      const filteredList = checkedItems
        .filter((e) => e.isChecked)
        .map((f) => f.name);
      setFormData({
        ...formData,
        genres: genres = filteredList,
      });
    },
    [checkedItems, formData]
  );

  //console.log(formData);

  const moviesDataArray: any = [];

  const onChange = (e: any) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const findMovies = async (formData: movieFilter) => {
    try {
      const res = await axios.get(`/moviesData`, { params: { formData } });
      const moviesData: object[] = res.data;
      for (const e of moviesData) {
        moviesDataArray.push(e);
      }
      const movieElement = (
        <tbody>
          {moviesDataArray &&
            moviesDataArray.map((movie: any, index: any) => (
              <tr key={index + 1}>
                <td className="number text-center">{index + 1}</td>
                <td className="image">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt="movie-poster"
                  />
                </td>
                <td className="movie">
                  <p className="float-left">
                    <strong>{movie.original_title}</strong>
                  </p>
                  <p className="float-left ml-4">{movie.release_date}</p>
                  <p className="float-right ml-4">
                    Rating: {movie.vote_average}
                  </p>
                  <p className="float-left mt-0">{movie.overview}</p>
                </td>
              </tr>
            ))}
        </tbody>
      );
      ReactDOM.render(
        movieElement,
        document.getElementById('movie-list-table')
      );
    } catch (error) {
      const errors = error.response.data.errors;
      console.log(errors);
    }
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    findMovies(formData);
  };

  return (
    <Fragment>
      <div className="col-md-4">
        <h3 className="grid-title">
          <i className="fa fa-filter"></i> Filters
        </h3>
        <hr />
        <form className="form" onSubmit={(e) => onSubmit(e)}>
          <h5 className="mt-4 mb-1">Year of Release Range</h5>
          <p className="small mt-0 mb-2 low-line-height">
            Please choose range of no more than 3 years. (eg 2011-2013)
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
              onChange={(e) => onChange(e)}
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
              onChange={(e) => onChange(e)}
            />
          </div>
          {/* <input type="hidden" id="dtp_input2" value="" /> */}
          <label htmlFor="Language Dropdown">
            Language
            <select
              id="language"
              name="language"
              value={language}
              onChange={(e) => onChange(e)}
            >
              {genreObjList.map((genre) => (
                <option key={genre.lang} value={genre.code}>
                  {genre.lang}
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
                  <label>{genre.name}</label>
                </div>
              ))}
            </div>
          </div>
          <input className="btn btn-info mt-3" type="submit" value="Submit" />
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
    </Fragment>
  );
};
