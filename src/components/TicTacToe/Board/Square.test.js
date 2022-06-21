import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import Square from "./Square";

test('Square has an onClick event when lacking an X or O value.', async () => {
  const handleClick = (a) => "X"
  render(<Square keyValue={{key: 0, value: null}} winner={null} handleClick={handleClick} />)
  userEvent.click(screen.getByRole('button'))
  const linkElement = await screen.findByTestId('BLANK-SQUARE-0');
  expect(linkElement).toBeVisible();
})

test('Square with a value displays X or O.', async () => {
  const handleClick = (a) => "X"
  render(<Square keyValue={{key: 0, value: "x"}} winner={null} handleClick={handleClick} />)
  const linkElement = screen.getByText(/x/i);
  expect(linkElement).toBeVisible();
})