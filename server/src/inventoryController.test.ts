import express from 'express';
import request from 'supertest';

const { getAllInventory, getInventoryById } = require('./inventoryController');

const app = express();

app.get('/api/inventory', getAllInventory);
app.get('/api/inventory/:id', getInventoryById);

describe('inventory controller', () => {
    it('should return 1 inventory when passing id 1', async () => {
        const response = await request(app).get('/api/inventory/1');
        expect(response.status).toEqual(200);
    })
})