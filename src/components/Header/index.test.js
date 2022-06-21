import { render, screen } from '@testing-library/react';
import App from '../../App';

test('header has a home link', () => {
    render(<App />)
    const link = screen.getByText(/home/i).closest('a');
    expect(link).toHaveAttribute('href', '/')
})