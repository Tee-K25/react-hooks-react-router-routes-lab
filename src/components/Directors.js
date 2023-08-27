import React from "react";
import { directors } from "../data";

function Directors() {
  let thyDirectors = directors.map((director, index) => {
    return (
      <div key={index}>
        <p>{director.name}</p>
        <ul>
          {director.movies.map((movie, index) => {
            return <li key={index}>{movie}</li>;
          })}
        </ul>
      </div>
    );
  });
  return (
    <div>
      <h1>Directors Page</h1>
      {thyDirectors}
    </div>
  );
}

export default Directors;
