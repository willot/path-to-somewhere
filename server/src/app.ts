import express, {json}from 'express';
import cors from 'cors';


const app = express();
const port = 3001;
app.use(cors());
app.use(json());

// Define a simple endpoint
app.get('/api/hello', (req, res) => {
    res.json({ message: 'We have a back end' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});