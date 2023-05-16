const connection = require('./connection');

const getProducts = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM Shopper.products;',
  );
  return result;
}

const getProductById = async (code) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM Shopper.products WHERE code = ?;', [code],
  );
  return result;
};

const updateProduct = async (price, code) => {
  const [{ updatedRows }] = await connection.execute(
    'UPDATE Shopper.products SET sales_price = ? WHERE code = ?', [price, code],
  );
  return updatedRows;
};

module.exports = {
  getProducts,
  getProductById,
  updateProduct,
}