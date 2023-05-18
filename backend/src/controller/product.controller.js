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

const validateProducts = async (req, res) => {
  const { body } = req
  const promises = [];

  for (const element of body) {
    const promise = productService.validateProducts(element.product_code, element.new_price);
    promises.push(promise);
  }

  const validatedProducts = await Promise.all(promises);
  console.log(validatedProducts);
  return res.status(200).json(validatedProducts);
}

module.exports = {
  getProducts,
  updateProducts,
  validateProducts
}