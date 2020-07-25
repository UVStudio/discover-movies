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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieList = void 0;
var react_1 = __importStar(require("react"));
exports.MovieList = function (_a) {
    var movieList = _a.movieList, loading = _a.loading;
    if (loading) {
        return (<tr>
        <td>loading...</td>
      </tr>);
    }
    return (<react_1.Fragment>
      {movieList &&
        movieList.map(function (movie, index) { return (<tr key={index + 1}>
            <td className="number text-center">{index + 1}</td>
            <td className="image">
              <img src={movie.poster_path
            ? "https://image.tmdb.org/t/p/w500" + movie.poster_path
            : "/img/noposter.jpg"} alt="movie-poster"/>
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
          </tr>); })}
    </react_1.Fragment>);
};
