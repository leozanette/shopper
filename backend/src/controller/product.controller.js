const productService = require('../services/product.service');

const getProducts = async (req, res) => {
  // console.log('controller')
  const product = await productService.getProducts();

  return res.status(200).json(product);
};

const updateProducts = async (req, res) => {
  const { body } = req
  body.forEach(async element => {
    await productService.updateProducts(element.new_price, element.code);
  });
  return res.status(200).json(body);
}

module.exports = {
  getProducts,
  updateProducts,
}