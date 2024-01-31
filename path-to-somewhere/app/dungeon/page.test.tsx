import ReactQueryProvider from "@/contexts/ReactQueryProvider";
import Dungeon from "./page";
import { CharacterDetails, UserContext } from "@/contexts/UserProvider";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const mockPush = jest.fn();

jest.mock('next/navigation', () => ({
    ...jest.requireActual('next/navigation'),
    useRouter: () => ({
        push: mockPush,
    })
}));

describe("dungeon page", () => {
    let characterDetails = {} as unknown as CharacterDetails;

    beforeEach(() => {
        characterDetails = {
            userName: 'Tom',
            name: "warrior",
            baselineVitals: {health: 100, mana: 100},
            weapons: undefined,
            armor: undefined
        }
    });

    it('should display the name the user Pick and the class of character on the page from the context', async () => {
        render(
            <ReactQueryProvider>
                <UserContext.Provider value={{ characterDetails: characterDetails, setCharacterDetails: jest.fn() }}>
                    <Dungeon />
                </UserContext.Provider>
            </ReactQueryProvider>
        );

        const name = await screen.findByText(/Welcome Tom powerful warrior/);

        expect(name).toBeVisible();
    })

    it('should display roomCeiling content when user click on room index 6', async () => {
        render(
            <ReactQueryProvider>
                <UserContext.Provider value={{ characterDetails: characterDetails, setCharacterDetails: jest.fn() }}>
                    <Dungeon />
                </UserContext.Provider>
            </ReactQueryProvider>
        );

        const roomButton = await screen.findByTestId('room6')
        await userEvent.click(roomButton);
        expect(screen.getByRole('button', { name: 'Enter' })).toBeVisible();
    })

    it('should display fight room content when user click on room index 8', async () => {
        render(
            <ReactQueryProvider>
                <UserContext.Provider value={{ characterDetails: characterDetails, setCharacterDetails: jest.fn() }}>
                    <Dungeon />
                </UserContext.Provider>
            </ReactQueryProvider>
        );

        const roomButton = await screen.findByTestId('room8')
        await userEvent.click(roomButton);

        const enemyName = screen.getByText('Enemy present in the room: Shadow Wraith')
        expect(enemyName).toBeVisible;
    
    })
});