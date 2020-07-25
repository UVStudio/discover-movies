import React, { Fragment } from 'react';

export const MovieList = ({
  movieList,
  loading,
}: {
  movieList: object[];
  loading: boolean;
}) => {
  if (loading) {
    return (
      <tr>
        <td>loading...</td>
      </tr>
    );
  }
  return (
    <Fragment>
      {movieList &&
        movieList.map((movie: any, index: number) => (
          <tr key={index + 1}>
            <td className="number text-center">{index + 1}</td>
            <td className="image">
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : `/img/noposter.jpg`
                }
                alt="movie-poster"
              />
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
          </tr>
        ))}
    </Fragment>
  );
};
