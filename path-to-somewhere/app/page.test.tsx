import { render, screen } from '@testing-library/react';
import Home from "./page";

describe("home page", () => {
    it('should have text setup Jest test', async () => {
        render(<Home/>)

        const placeHolder = await screen.findByPlaceholderText("Enter a name");

        expect(placeHolder).toBeInTheDocument();
    })
})