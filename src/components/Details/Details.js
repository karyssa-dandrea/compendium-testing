import React from 'react';
import './Details.css';

export default function Details({ films, searchFilm }) {
  return (
    <div>
      <h1>Studio Ghibli Films</h1>
      <img src={searchFilm.image} />
      <span>{searchFilm.title}</span>
      {films.map((film) => (
        <div key={film.id}>
          <span>{film.title}</span>
          <img key={film.id} src={film.image} />
        </div>
      ))}
    </div>
  );
}
