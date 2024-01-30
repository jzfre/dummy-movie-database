import { render, screen } from '@testing-library/react';
import App from '@/App';

describe('App', () => {
  test('Renders the app', async () => {
    render(<App />);
    expect(screen.getByText('☆ Favorites')).toBeInTheDocument();
  });
});
