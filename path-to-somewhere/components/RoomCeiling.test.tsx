import { render, screen } from "@testing-library/react"
import RoomCeiling from "./RoomCeiling"
import userEvent from "@testing-library/user-event"

describe('Room1 component', () => {

    it('should display an image if you click enter the room', async() => {
        render(<RoomCeiling vitals={{health:200, mana:50}} setVitals={jest.fn()}/>)

        const enterButton = screen.getByRole('button', {name: 'Enter'})

        await userEvent.click(enterButton);

        expect(screen.getByRole('img', {name: "a big rock crushed you"})).toBeVisible;
    })

    it('should trigger the setVital function when you enter the room and get crushed', async() => {
        const mockSetVitals = jest.fn();
        render(<RoomCeiling vitals={{health:200, mana:50}} setVitals={mockSetVitals}/>)

        const enterButton = screen.getByRole('button', {name: 'Enter'})

        await userEvent.click(enterButton);

        expect(mockSetVitals).toHaveBeenCalledWith({health:0, mana:50});
    })

    it('should display some text if you click leave the room', async() => {
        render(<RoomCeiling vitals={{health:200, mana:50}} setVitals={jest.fn()}/>)

        const enterButton = screen.getByRole('button', {name: 'Leave'})

        await userEvent.click(enterButton);

        expect(screen.getByText('Good choice the ceiling crumble has you close the door')).toBeVisible;
    })
})