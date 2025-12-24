const express = require('express'); 
const cors = require("cors");
const app = express()

app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));
const router = require('./routes/index');
app.use('/api', router);


app.listen(3300, () => {
    console.log('API running on http://localhost:3300');
});