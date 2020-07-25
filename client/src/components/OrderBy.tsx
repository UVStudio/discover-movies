import React from 'react';

export const OrderBy = ({
  onClickVote,
  onClickPopularity,
}: {
  onClickVote: any;
  onClickPopularity: any;
}) => {
  return (
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
        <a className="dropdown-item" href="/#" onClick={(e) => onClickVote(e)}>
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
  );
};
