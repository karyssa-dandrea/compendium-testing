import React from 'react';

export default function Details({ films, searchFilm }) {
  return (
    <div>
      <h1>Studio Ghibli Films</h1>
      <img src={searchFilm.image} />
      {films.map((film) => (
        <img key={film.id} src={film.image} />
      ))}
    </div>
  );
}
