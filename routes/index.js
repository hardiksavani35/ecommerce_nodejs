const express = require('express');
const route   = express.Router();
const dbconn  = require('../util/database');

route.get('/categories', async (req, res) => {
    try {
        const [rows] = await dbconn.execute('SELECT * FROM categories WHERE status = ?', ['active']);

        return res.json({
            success: true,
            data: rows
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: 'Failed to retrieve categories.'
        });
    }
});

route.get('/products', async (req, res) => {
    try {
        const [rows] = await dbconn.execute('SELECT * FROM products WHERE status = ?', ['active']);

        return res.json({
            success: true,
            data: rows
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: 'Failed to retrieve products.'
        });
    }
});

module.exports = route;
