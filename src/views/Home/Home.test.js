import { render, screen } from '@testing-library/react';
import Home from './Home';

test('should render in a loading state', () => {
  render(<Home />);

  expect(screen.getByText(/loading/i)).toBeInTheDocument();
});
