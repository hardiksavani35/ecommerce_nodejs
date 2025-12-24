const express = require('express');
const route   = express.Router();
const categoryService = require('../services/categoryService');
const productService = require('../services/productService');

route.get('/categories', (req, res) => {
    res.json(categoryService.getAllCategories());
});

module.exports = route;
