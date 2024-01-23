import { render, screen } from "@testing-library/react"
import Profile from "./page"
import { UserContext, UserProvider } from "@/contexts/UserProvider"


describe("Profile page", () => {
    it('should display the name the user Pick on the page from the context', async () => {
        render(
            <UserContext.Provider value={{userName: 'Mike'}}>
                <Profile />
            </UserContext.Provider>
        )

        const name = await screen.findByText(/Mike/);

        expect(name).toBeVisible();
    })
})