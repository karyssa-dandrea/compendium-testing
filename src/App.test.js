import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('correctly search ghibli movie', async () => {
  render(<App />);

  const searchBar = await screen.findByRole('textbox');
  const movieName = 'kiki';
  const searchButton = screen.getByRole('button', {
    name: /search/i,
  });

  userEvent.type(searchBar, movieName);
  userEvent.click(searchButton);

  const movie = await screen.findAllByText(movieName, { exact: false });
  const resultMovies = movie.map((item) => item.textContent);
  const handleMovieCheck = (film) => film.toLowerCase().includes(movieName);
  const sameName = resultMovies.every(handleMovieCheck);
  expect(sameName).toBe(true);
});

// grab the results of my search
