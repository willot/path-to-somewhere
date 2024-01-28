import { render, screen } from "@testing-library/react"
import RoomButton from "./RoomButton"
import userEvent from "@testing-library/user-event"

describe('RoomButtom component', () => {

    it('should display Open when button it has not been clicked', () => {
        render(<RoomButton disabledButton={false} roomIndex={1} setRoomSelection={jest.fn()}/>)

        const buttonText = screen.getByRole('img', {name: 'Open'});
        expect(buttonText).toBeVisible();
    });
    
    it('should display Explored when button has been clicked', async () => {
        render(<RoomButton disabledButton={false} roomIndex={1} setRoomSelection={jest.fn()}/>)
        
        const buttonText = screen.getByRole('img', {name: 'Open'});
        await userEvent.click(buttonText);

        const buttonTextClicked = screen.getByRole('img', {name: 'Explored'});
        expect(buttonTextClicked).toBeVisible();
    });

    it('should be disabled if disabled in true', async () => {
        render(<RoomButton disabledButton={true} roomIndex={1} setRoomSelection={jest.fn()}/>)

        const buttonText = await screen.findByRole('button', {name: 'Open'});
        expect(buttonText).not.toBeEnabled();
    });

    it('should not be disabled if disabled in false', () => {
        render(<RoomButton disabledButton={false} roomIndex={1} setRoomSelection={jest.fn()}/>)

        const buttonText = screen.getByRole('button', {name: 'Open'});
        expect(buttonText).toBeEnabled();
    });
})