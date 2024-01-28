import express, {json}from 'express';
import cors from 'cors';
import { knightProfile, monkProfile, warriorProfile, wizardProfile } from './CharacterProfile';


const app = express();
const port = 3001;
app.use(cors());
app.use(json());

// Define a simple endpoint
app.get('/api/hello', (req, res) => {
    res.json({ message: 'We have a back end' });
});

app.get('/api/bio', (req, res) => {
    res.json ({
        characters: [wizardProfile, monkProfile, warriorProfile, knightProfile]
    })
});

app.get('/api/rooms', (req, res) => {

    const rooms = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const shuffle = (array: number[]) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    res.json ({
        rooms: shuffle(rooms)
    })
})

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});