import { render, screen } from '@testing-library/react';
import Home from './Home';

test('should render home component', async () => {
  render(<Home />);

  const heading = await screen.findByRole('heading', {
    name: /studio ghibli films/i,
  });

  const search = screen.getByRole('textbox');

  const button = screen.getByRole('button', {
    name: /search/i,
  });

  expect(heading).toBeInTheDocument();
  expect(search).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});
