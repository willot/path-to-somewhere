import { render, screen } from "@testing-library/react"
import Profile from "./page"
import { CharacterDetails, UserContext, UserProvider } from "@/contexts/UserProvider"
import userEvent from "@testing-library/user-event";
import ReactQueryProvider from "@/contexts/ReactQueryProvider";
import axios from 'axios';

jest.mock('axios');


const mockPush = jest.fn();

jest.mock('next/navigation', () => ({
    ...jest.requireActual('next/navigation'),
    useRouter: () => ({
        push: mockPush,
    })
}));

describe("Profile page", () => {

    let characterDetails = {} as unknown as CharacterDetails;

    beforeEach(() => {
        (axios.get as jest.Mock).mockResolvedValue({
            data: {
                characters: [{
                    name: "monk",
                    bio: "Silent and agile",
                    skills: [
                        {
                            name: 'Martial Arts Mastery',
                            description: 'description 1',
                        },
                        {
                            name: 'Zen Meditation',
                            description: 'description 2',
                        },

                    ],

                }]
            },
        });

        characterDetails = {
            userName: 'Mike',
            name: undefined,
            baselineVitals: undefined,
            weapons: undefined,
            armor: undefined
        }

    });

    it('should display the name the user Pick on the page from the context', async () => {
        render(
            <ReactQueryProvider>
                <UserContext.Provider value={{ characterDetails: characterDetails, setCharacterDetails: jest.fn() }}>
                    <Profile />
                </UserContext.Provider>
            </ReactQueryProvider>
        )

        const name = await screen.findByText(/Mike/);

        expect(name).toBeVisible();
    })

    it('should redirect to home page if there is no userName', async () => {
        characterDetails = {
            userName: undefined,
            name: undefined,
            baselineVitals: undefined,
            weapons: undefined,
            armor: undefined
        }

        render(
            <ReactQueryProvider>
                <UserContext.Provider value={{ characterDetails: characterDetails, setCharacterDetails: jest.fn() }}>
                    <Profile />
                </UserContext.Provider>
            </ReactQueryProvider>
        )

        expect(mockPush).toHaveBeenCalledWith('/');
    })

    it('should display the name of the selected character and a bio when image is clicked', async () => {
        render(
            <ReactQueryProvider>
                <UserContext.Provider value={{ characterDetails: characterDetails, setCharacterDetails: jest.fn() }}>
                    <Profile />
                </UserContext.Provider>
            </ReactQueryProvider>
        )

        const monkImg = await screen.findByRole('button', { name: 'monk' });
        await userEvent.click(monkImg);

        expect(screen.getByText('MONK')).toBeVisible;
        expect(screen.getByText('Bio:')).toBeVisible;
    })

    it('should display the bio from api when user click on image', async () => {
        render(
            <ReactQueryProvider>
                <UserContext.Provider value={{ characterDetails: characterDetails, setCharacterDetails: jest.fn() }}>
                    <Profile />
                </UserContext.Provider>
            </ReactQueryProvider>
        )

        const monkImg = await screen.findByRole('button', { name: 'monk' });
        await userEvent.click(monkImg);

        expect(screen.getByText('MONK')).toBeVisible;
        expect(screen.getByText(/Silent and agile/)).toBeVisible;
        expect(screen.getByText(/Zen Meditation/)).toBeVisible;
        expect(screen.getByText(/description 2/)).toBeVisible;
    })

    it('should direct user to th dungeon page when selection is confirmed ', async () => {
        const mockSetCharacterDetails = jest.fn();

        render(
            <ReactQueryProvider>
                <UserContext.Provider value={{ characterDetails: characterDetails, setCharacterDetails: mockSetCharacterDetails }}>
                    <Profile />
                </UserContext.Provider>
            </ReactQueryProvider>
        )

        const monkImg = await screen.findByRole('button', { name: 'monk' });
        await userEvent.click(monkImg);

        const confirmationButton = screen.getByRole('button', { name: 'Confirm Selection' })
        await userEvent.click(confirmationButton);

        expect(mockSetCharacterDetails).toHaveBeenCalledWith({
            "armor": undefined,
            "baselineVitals": undefined,
            "name": "monk",
            "userName": "Mike",
            "weapons": undefined
        })
        expect(mockPush).toHaveBeenCalledWith('/dungeon');
    })
})