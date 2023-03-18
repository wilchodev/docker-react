import { render, screen } from '@testing-library/react';
import App from './App';

test('renders HELLO THERE! link', () => {
  render(<App />);
  const linkElement = screen.getByText(/HELLO THERE!/i);
  expect(linkElement).toBeInTheDocument();
});
