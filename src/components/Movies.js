import React from "react";
import { movies } from "../data";

function Movies() {
  let thyMovies = movies.map((movie, index) => {
    return (
      <div key={index}>
        <p>{movie.title}</p>
        <p>{movie.time}</p>
        <ul>
          {movie.genres.map((genre, index) => {
            return <li key={index}>{genre}</li>;
          })}
        </ul>
      </div>
    );
  });
  return (
    <div>
      <h1>Movies Page</h1>
      {thyMovies}
    </div>
  );
}

export default Movies;
