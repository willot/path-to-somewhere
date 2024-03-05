import express, { Handler } from "express";

const router = express.Router();

const getAllInventory: Handler = async (req: any, res: any) => {
    const inventories = [{ id: 1 }, { id: 2 }]
    res.send({ inventories });
};


const getInventoryById: Handler = (req, res) => {
    const inventories = [{ id: 1 }, { id: 2 }]

    const id = req.params.id;

    if (id) {
        const result = inventories.find((inv) => {
            return inv.id === Number(id);
        })
        if(result) {
            res.send({result})
        }
    }

    res.sendStatus(404)
}

module.exports = {
    getAllInventory,
    getInventoryById,
  };