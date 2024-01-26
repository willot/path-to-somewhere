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
})

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});