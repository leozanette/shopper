const express = require('express');
const productController = require('../controller/product.controller');

const productRouter = express.Router();

productRouter.get('/', (req, res) => productController.getProducts(req, res));
productRouter.put('/', (req, res) => productController.updateProducts(req, res));

module.exports = productRouter;