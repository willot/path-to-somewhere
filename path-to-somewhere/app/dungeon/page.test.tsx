import ReactQueryProvider from "@/contexts/ReactQueryProvider";
import Dungeon from "./page";
import { UserContext } from "@/contexts/UserProvider";
import { render, screen } from "@testing-library/react";

describe("dungeon page", () => {

    it('should display the name the user Pick and the class of character on the page from the context', async () => {
        render(
            <ReactQueryProvider>
                <UserContext.Provider value={{ userName: 'Tom', setUserName: jest.fn(), character: 'warrior', setCharacter: jest.fn() }}>
                    <Dungeon />
                </UserContext.Provider>
            </ReactQueryProvider>
        )

        const name = await screen.findByText(/Welcome Tom powerful warrior/);

        expect(name).toBeVisible();
    })
});