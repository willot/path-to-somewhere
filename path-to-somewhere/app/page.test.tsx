import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from "./page";

const mockPush = jest.fn();

jest.mock('next/navigation', () => ({
    ...jest.requireActual('next/navigation'),
    useRouter: () => ({
        push: mockPush,
    })
}));

describe("home page", () => {
    it('should have an input to enter name', async () => {
        render(<Home />)

        const placeHolder = await screen.findByPlaceholderText("Enter a name");

        expect(placeHolder).toBeInTheDocument();
    });

    it('should have a disabled create character button when there is no name', async () => {
        render(<Home />)

        const button = await screen.findByRole('button', { name: 'Create your character' });
        expect(button).toBeDisabled();
    });

    it('should have create character button enabled when user enter a name', async () => {
        render(<Home />)

        const placeHolder = await screen.findByPlaceholderText("Enter a name");
        await userEvent.type(placeHolder, 'bob')

        const button = await screen.findByRole('button', { name: 'Create your character' });

        expect(button).not.toBeDisabled
    })

    it('should navigate to /profile when clicking on the create user button', async () => {
        render(<Home />)

        const placeHolder = await screen.findByPlaceholderText("Enter a name");
        await userEvent.type(placeHolder, 'bob');

        const button = await screen.findByRole('button', { name: 'Create your character' });
        await userEvent.click(button);

        expect(mockPush).toHaveBeenCalledWith('/profile');
    })
})