import React from "react";
import { actors } from "../data";

function Actors() {
  let thyActors = actors.map((actor, index) => {
    return (
      <div key={index}>
        <p>{actor.name}</p>
        <ul>
          {actor.movies.map((movie, index) => {
            return <li key={index}>{movie}</li>;
          })}
        </ul>
      </div>
    );
  });
  return (
    <div>
      <h1>Actors Page</h1>
      {thyActors}
    </div>
  );
}

export default Actors;
