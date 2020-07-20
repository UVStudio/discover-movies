import * as React from 'react';
import axios from 'axios';
import { useState, Fragment, useCallback } from 'react';
import { dropdownlist } from '../dropdownlist';
import { checkboxes } from '../checkboxes';

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
    language: 'English',
    genres: [],
  });

  let { fromYear, toYear, language, genres } = formData;

  const [checkedItems, setCheckedItems] = useState(checkboxes);

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

  console.log(formData);

  const onChange = (e: any) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const findMovies = async (formData: movieFilter) => {
    try {
      const res = await axios.get(`/moviesData?formData=${language},${genres}`);
      console.log(res.data);
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
                  <label>{genre.name}</label>
                </div>
              ))}
            </div>
          </div>
          <input className="btn btn-info mt-3" type="submit" value="Submit" />
        </form>
      </div>
    </Fragment>
  );
};
