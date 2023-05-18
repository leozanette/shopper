const {regrasNegocio} = require('../utils/functions')
const productModel = require('../models/product.model');

const getProducts = async () => {
  const products = await productModel.getProducts();
  return products;
}

const updateProducts = async (price, code) => {
  await productModel.updateProduct(price, code);
}

const validateProducts = async (code, new_price) => {
  const product = await productModel.getProductById(code);
  const regras = regrasNegocio(parseFloat(new_price), product.sales_price, product.cost_price)
  const result = {...product, new_price, regras}
  return result
}

module.exports = {
  getProducts,
  updateProducts,
  validateProducts
}