const productModel = require('../models/product.model');

const getProducts = async () => {
  // console.log('service');
  const products = await productModel.getProducts();
  return products;
}

const updateProducts = async (price, code) => {
  await productModel.updateProduct(price, code);
}

module.exports = {
  getProducts,
  updateProducts,
}