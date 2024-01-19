import { render, screen } from '@testing-library/react';
import Home from "./page";

describe("home page", () => {
    it('should have an input to enter name', async () => {
        render(<Home/>)

        const placeHolder = await screen.findByPlaceholderText("Enter a name");

        expect(placeHolder).toBeInTheDocument();
    })

    it('should have a disabled create character button when there is no name', async () => {
        render(<Home/>)

        const button = await screen.findByRole('button', {name: 'Create your character'});
        expect(button).toBeDisabled();
    })
})