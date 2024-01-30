import { render, screen } from "@testing-library/react"
import Inventory from "./Inventory"

describe('Inventory component', () => {
    it('should display vitals', () => {
        render(<Inventory vitals={{health:200, mana:50}}/>)

        const vitalsHealth = screen.getByText('Health: 200'); 
        const vitalsMana =  screen.getByText('Mana: 50'); 

        expect(vitalsHealth).toBeVisible();
        expect(vitalsMana).toBeVisible();
    })
})