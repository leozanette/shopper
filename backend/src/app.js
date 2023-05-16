const express = require('express');
const cors = require('cors');
require('dotenv').config();
const productRouter = require('./router/product.router');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/products', productRouter);

app.get('/', (req, res) => {
  res.send();
})

module.exports = app;