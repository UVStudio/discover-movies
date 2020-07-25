import * as React from 'react';
import axios from 'axios';
import { useState, useEffect, Fragment, useCallback } from 'react';
import { genreObjList } from '../dropdownlist';
import { checkboxes } from '../checkboxes';
import { MovieList } from './MovieList';

type movieFilter = {
  fromYear: string;
  toYear: string;
  language: string;
  genres: string[];
};

export const Filters = () => {
  const [formData, setFormData] = useState<movieFilter>({
    fromYear: '',
    toYear: '',
    language: 'en',
    genres: [],
  });
  const [checkedItems, setCheckedItems] = useState(checkboxes);
  const [movieList, setMovieList] = useState<object[]>([]);
  const [loading, setLoading] = useState(false);
  const [postsPerPage, setPostsPerPage] = useState(10);

  let { fromYear, toYear, language, genres } = formData;

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

  function compare(key: string) {
    return function orderRating(a: any, b: any) {
      let comparison = 0;
      if (a[key] > b[key]) {
        comparison = -1;
      } else if (a[key] < b[key]) {
        comparison = 1;
      }
      return comparison;
    };
  }

  //remember to copy to a new object before mutating and setting state to it.
  const onClickVote = (e: any) => {
    e.preventDefault();
    setLoading(true);
    let voteList: object[] = [...movieList];
    voteList.sort(compare('vote_average'));
    setMovieList(voteList);
    setLoading(false);
  };

  const onClickPopularity = (e: any) => {
    e.preventDefault();
    setLoading(true);
    let popList: object[] = [...movieList];
    popList.sort(compare('popularity'));
    setMovieList(popList);
    setLoading(false);
  };

  const onChange = (e: any) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const findMovies = async (formData: movieFilter) => {
    const moviesDataArray: object[] = [];
    try {
      setLoading(true);
      const res = await axios.get(`/moviesData`, { params: { formData } });
      const moviesData: object[] = res.data;
      for (const e of moviesData) {
        moviesDataArray.push(e);
      }
      moviesDataArray.sort(compare('popularity'));
      setMovieList(moviesDataArray);
      setLoading(false);
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
        <form className="form mb-5" onSubmit={(e) => onSubmit(e)}>
          <h5 className="mt-4 mb-1">Year of Release Range</h5>
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
          <label htmlFor="Language Dropdown" className="langauge-label mr-2">
            Language:{'  '}
          </label>
          <select
            id="language"
            name="language"
            className="btn btn-info dropdown-toggle"
            value={language}
            onChange={(e) => onChange(e)}
          >
            {genreObjList.map((genre) => (
              <option key={genre.lang} value={genre.code}>
                {genre.lang}
              </option>
            ))}
          </select>
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
                <a
                  className="dropdown-item"
                  href="/#"
                  onClick={(e) => onClickVote(e)}
                >
                  Rating
                </a>
                <a
                  className="dropdown-item"
                  href="/#"
                  onClick={(e) => onClickPopularity(e)}
                >
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
          <table className="table table-hover" id="movie-list-table">
            <tbody>
              <MovieList movieList={movieList} loading={loading} />
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
    </Fragment>
  );
};
