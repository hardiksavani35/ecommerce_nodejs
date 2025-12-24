const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(expressLayouts);
app.set('layout', 'layout');

app.use(express.static(path.join(__dirname, 'public')));

const router = require('./routes/index');

app.use('/', router);

app.listen(3300)