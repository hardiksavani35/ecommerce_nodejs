const express = require('express');
const route   = express.Router();
const categoryService = require('../services/categoryService');
const productService = require('../services/productService');

route.get('/categories', (req, res) => {
    res.json(categoryService.getAllCategories());
});

route.get('/products', (req, res) => { 
    const { type } = req.query;
    res.json(productService.getAllProducts(type));
});

module.exports = route;
