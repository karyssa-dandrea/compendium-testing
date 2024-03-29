export async function getFilms() {
  const resp = await fetch('https://ghibliapi.herokuapp.com/films');
  const data = await resp.json();
  return data;
}

export async function getFilmByTitle(title) {
  const resp = await fetch(`https://ghibliapi.herokuapp.com/films/${title}`);
  const data = await resp.json();
  return data;
}
