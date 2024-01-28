import ReactQueryProvider from "@/contexts/ReactQueryProvider";
import Dungeon from "./page";
import { UserContext } from "@/contexts/UserProvider";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("dungeon page", () => {

    it('should display the name the user Pick and the class of character on the page from the context', async () => {
        render(
            <ReactQueryProvider>
                <UserContext.Provider value={{ userName: 'Tom', setUserName: jest.fn(), character: 'warrior', setCharacter: jest.fn() }}>
                    <Dungeon />
                </UserContext.Provider>
            </ReactQueryProvider>
        );

        const name = await screen.findByText(/Welcome Tom powerful warrior/);

        expect(name).toBeVisible();
    })

    it('should display room1 content when user click on Room1', async () => {
        render(
            <ReactQueryProvider>
                <UserContext.Provider value={{ userName: 'Tom', setUserName: jest.fn(), character: 'warrior', setCharacter: jest.fn() }}>
                    <Dungeon />
                </UserContext.Provider>
            </ReactQueryProvider>
        );

        const roomButtons = await screen.findAllByRole('button', { name: 'Open' })
        await userEvent.click(roomButtons[0]);
        expect(screen.getByRole('button', { name: 'Enter' })).toBeVisible();


    })
});