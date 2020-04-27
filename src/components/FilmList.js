import React from 'react';
import Film from "./Film.js";


function FilmList({ films }) {
  const filmNodes = films.map(({ name, url }) => {
    return (
      <Film url={url}>{name}</Film>
    );
  });
  return (
    <div className="film-list">
    {/* <h1> Films </h1> */}
    {filmNodes}
    </div>
  );
}

export default FilmList;
