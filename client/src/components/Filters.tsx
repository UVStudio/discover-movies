import * as React from 'react';
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
      setFormData({ ...formData, genres: genres = filteredList });
    },
    [checkedItems]
  );

  console.log(formData);

  return (
    <Fragment>
      <div className="col-md-4">
        <h3 className="grid-title">
          <i className="fa fa-filter"></i> Filters
        </h3>
        <hr />

        <form className="form">
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
                  {/* {genre.isChecked
                    ? console.log('item check', genre.name)
                    : null} */}
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
