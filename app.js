const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

//Import Routes
const productsRouter = require('./routes/empleados.routes');

const api = process.env.API_URL;

app.use(cors());
app.options('*', cors());

app.use(bodyParser.json());

//Routers
app.use(`${api}/empleados`, productsRouter);

mongoose.connect(process.env.CONNECTION_STRING,{ useNewUrlParser: true, useUnifiedTopology: true, dbName: process.env.DB_NAME }).then(() => {
    console.log('Database Connection is ready...')
}).catch((err) => {
    console.error(err);
})

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log('Server is runnig http://localhost:4000');
    console.log(api);
});