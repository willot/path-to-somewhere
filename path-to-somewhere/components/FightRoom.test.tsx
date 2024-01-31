import { render, screen } from "@testing-library/react";
import FightRoom from "./FightRoom"
import { Vitals } from "./Inventory";
import { CharacterDetails, UserContext } from "@/contexts/UserProvider";
import { Enemy } from "@/app/dungeon/page";
import userEvent from "@testing-library/user-event";

describe('FightRoom component', () => {

    let enemies = [] as unknown as Enemy[];
    let vitals = {} as unknown as Vitals;
    let characterDetails = {} as unknown as CharacterDetails;

    beforeEach(() => {
        characterDetails = {
            userName: 'Mike',
            name: "monk",
            baselineVitals: undefined,
            weapons: {
                name: 'Sword',
                damage: 50,
            },
            armor: {
                name: "Light",
                defense: 10,
            }
        }

        vitals = {
            health: 100,
            mana: 50,
        }

        enemies = [
            { "name": "Shadow Wraith", "damage": 35, "health": 100, "mana": 0, "hitChance": 3, "description": "bla" },
            { "name": "Venomous Serpent Sentinel", "damage": 45, "health": 20, "mana": 0, "hitChance": 1, "description": "blo" },
            { "name": "Ironclad Golem Guardian", "damage": 80, "health": 150, "mana": 0, "hitChance": 1, "description": "bli" }
        ]

    });


    it('should display name and health information', () => {
        render(
            <UserContext.Provider value={{ characterDetails: characterDetails, setCharacterDetails: jest.fn() }}>
                <FightRoom enemies={enemies} roomIndex={3} setVitals={jest.fn()} vitals={vitals} />
            </UserContext.Provider>
        );

        const monsterName = screen.getByText(/Ironclad Golem Guardian/);
        const monsterHealth = screen.getByText("Enemy Health: 150");
        const heroHealth = screen.getByText("Your Health: 100");
    });

    it('should decrease the health of the monster and your health when the attack button is clicked', async () => {
        const mockSetVitals = jest.fn();
        render(
            <UserContext.Provider value={{ characterDetails: characterDetails, setCharacterDetails: jest.fn() }}>
                <FightRoom enemies={enemies} roomIndex={3} setVitals={mockSetVitals} vitals={vitals} />
            </UserContext.Provider>
        );

        const attackButton = screen.getByRole('button', { name: 'Attack with weapon' });
        await userEvent.click(attackButton);

        const monsterHealth = screen.getByText("Enemy Health: 100");
        expect(mockSetVitals).toHaveBeenCalledWith({
            health: 30,
            mana: 50,
        });
    });

    it('should display enemy death message when enemy has no life', async () => {
        const mockSetVitals = jest.fn();
        render(
            <UserContext.Provider value={{ characterDetails: characterDetails, setCharacterDetails: jest.fn() }}>
                <FightRoom enemies={enemies} roomIndex={1} setVitals={mockSetVitals} vitals={vitals} />
            </UserContext.Provider>
        );

        const attackButton = screen.getByRole('button', { name: 'Attack with weapon' });
        await userEvent.click(attackButton);

        expect(mockSetVitals).toHaveBeenCalledWith({
            health: 65,
            mana: 50,
        });
    });

})

