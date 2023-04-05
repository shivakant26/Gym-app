import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';


test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByTestId("heading1");
  expect(linkElement).toBeInTheDocument();
});



describe('Main', () => {
  beforeEach(() => {
    render(<App />, { route: '/about' })
  })
  test('should land on about page', async () => {
    await screen.findByText('Connected')
  })
})


