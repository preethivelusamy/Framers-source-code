// const express = require('express');
// const router = express.Router();
// const Order = require('../models/Order');

// // Create a new order
// router.post('/', async (req, res) => {
//     const order = new Order(req.body);
//     try {
//         const savedOrder = await order.save();
//         res.status(201).json(savedOrder);
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// });

// // Get all orders
// router.get('/', async (req, res) => {
//     try {
//         const orders = await Order.find().populate('productId'); // Populates product details
//         res.json(orders);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// Create a new order
router.post('/', async (req, res) => {
    const order = new Order(req.body);
    try {
        const savedOrder = await order.save();
        res.status(201).json(savedOrder);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get all orders
router.get('/', async (req, res) => {
    try {
        const orders = await Order.find().populate('productId'); // Populates product details
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
