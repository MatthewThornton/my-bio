import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import TicTacToe from "./";

test('Clicking on a Square changes the value to X or O for first and second players.', async () => {
    render(<TicTacToe  />)

    // Player One
    userEvent.click(screen.getByTestId('BLANK-SQUARE-0')); // Returns the first button.
    expect(screen.getByTestId('FILLED-SQUARE-0')).toHaveTextContent(/x/i);

    // Player Two
    userEvent.click(screen.getByTestId('BLANK-SQUARE-1')); // Returns the second button.
    expect(screen.getByTestId('FILLED-SQUARE-1')).toHaveTextContent(/O/i);
})

