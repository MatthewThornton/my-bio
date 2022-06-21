import { render, screen, } from '@testing-library/react';
import Profile from "./Profile";


test('should render user info', async () => {
    render(<Profile />)
    const user = await screen.findByTestId('USER-NAME');
    expect(user).toBeVisible();
});
