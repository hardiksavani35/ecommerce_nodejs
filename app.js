const express = require('express');
const path = require('path');
const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/products', (req, res) => {
    res.render('products')
})

app.get('/cart', (req, res) => {
    res.render('cart');
});

app.get('/product/:id', (req, res) => {
    res.render('product-detail')
})

app.use((req, res) => {
    res.status(404).render('404');
});

app.listen(3000)