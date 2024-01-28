import { render, screen } from "@testing-library/react"
import Room1 from "./Room1"
import userEvent from "@testing-library/user-event"

describe('Room1 component', () => {

    it('should display an image if you click enter the room', async() => {
        render(<Room1/>)

        const enterButton = screen.getByRole('button', {name: 'Enter'})

        await userEvent.click(enterButton);

        expect(screen.getByRole('img', {name: "a big rock crushed you"})).toBeVisible;
    })

    it('should display some text if you click leave the room', async() => {
        render(<Room1/>)

        const enterButton = screen.getByRole('button', {name: 'Leave'})

        await userEvent.click(enterButton);

        expect(screen.getByText('Good choice the ceiling crumble has you close the door')).toBeVisible;
    })
})