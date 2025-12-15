const express = require('express');
const route   = express.Router();
const categoryService = require('../services/categoryService');
const productService = require('../services/productService');

route.get('/', (req, res) => {
    res.render('home', { 
        title: 'Home',
        categories: categoryService.getAllCategories(),
        featuredProducts: productService.getFeaturedProducts(),
    });
});

route.get('/products', (req, res) => {
    res.render('products')
})

route.get('/cart', (req, res) => {
    res.render('cart');
});

route.get('/product/:id', (req, res) => {
    res.render('product-detail')
})

route.use((req, res) => {
    res.status(404).render('404');
});

module.exports = route;
