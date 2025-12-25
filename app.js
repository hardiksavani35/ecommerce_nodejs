const express = require('express'); 
const app = express()

app.use(express.json());
// Alternative option to allow CORS
// Don;t need to install package, just set header and forward request
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

    next();
});

const router = require('./routes/index');
app.use('/api', router);


app.listen(3300, () => {
    console.log('API running on http://localhost:3300');
});