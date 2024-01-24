import { render, screen } from "@testing-library/react"
import Profile from "./page"
import { UserContext, UserProvider } from "@/contexts/UserProvider"
import userEvent from "@testing-library/user-event";

const mockPush = jest.fn();

jest.mock('next/navigation', () => ({
    ...jest.requireActual('next/navigation'),
    useRouter: () => ({
        push: mockPush,
    })
}));

describe("Profile page", () => {
    it('should display the name the user Pick on the page from the context', async () => {
        render(
            <UserContext.Provider value={{userName: 'Mike', setUserName: jest.fn()}}>
                <Profile />
            </UserContext.Provider>
        )

        const name = await screen.findByText(/Mike/);

        expect(name).toBeVisible();
    })

    it('should redirect to home page if there is no userName', async () => {
        render(
            <UserContext.Provider value={{userName: null, setUserName: jest.fn()}}>
                <Profile />
            </UserContext.Provider>
        )

        expect(mockPush).toHaveBeenCalledWith('/');
    })

    it('should display the name of the selected character and a bio when image is clicked', async () =>{
        render(
            <UserContext.Provider value={{userName: 'Mike', setUserName: jest.fn()}}>
                <Profile />
            </UserContext.Provider>
        )

        const monkImg = await screen.findByRole('button', {name:'Monk'});
        await userEvent.click(monkImg);

        expect(screen.getByText('MONK')).toBeVisible;
        expect(screen.getByText('Bio:')).toBeVisible;
    })
})