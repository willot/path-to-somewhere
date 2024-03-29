import express, { json } from 'express';
import cors from 'cors';
import { knightProfile, monkProfile, warriorProfile, wizardProfile } from './CharacterProfile';
import { enemies } from './Enemies';
import { Router } from 'express';

const inventory = require('./inventoryController');

const app = express();
const port = 3001;
app.use(cors());
app.use(json());

const inventoryRouter = Router();
app.use('/api/inventory', inventoryRouter);
inventoryRouter.route('/').get(inventory.getAllInventory);
inventoryRouter.route('/:id').get(inventory.getInventoryById);


const shuffle = (array: number[]) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

app.get('/api/bio', (req, res) => {
    res.json({
        characters: [wizardProfile, monkProfile, warriorProfile, knightProfile]
    })
});

app.get('/api/rooms', (req, res) => {

    const rooms = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    res.json({
        rooms: shuffle(rooms)
    })
});

app.get('/api/enemy', (req, res) => {
    res.json({
        enemies:enemies
    })
})

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});