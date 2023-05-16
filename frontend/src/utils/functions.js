const productsFormat = (productsCsv, products, setProductsTable) => {
  const productsTable = productsCsv.map((product) => {
    const productDb = products.filter((element) => element.code === parseInt(product.product_code))[0]
    return {
      code: parseInt(product.product_code),
      new_price: parseFloat(product.new_price),
      cost_price: parseFloat(productDb.cost_price),
      sales_price: parseFloat(productDb.sales_price),
      name: productDb.name,
    }
  });
  setProductsTable(productsTable);
}

const regrasNegocio = (new_price, sales_price, cost_price) => {
  if(new_price < cost_price) {
    return 'Novo preço abaixo do custo do produto'
  }

  if(new_price > (1.1 * sales_price)) {
    return 'Reajuste maior que 10%'
  }

  if(new_price < (0.9 * sales_price)) {
    return 'Reajuste menor que 10%'
  }
  return 'Reajuste Válido'
}

const validateButtonClick = (productCSV, products, setProductsTable) => {
  const isValid = productCSV.some((element) => 
  !(element.new_price === undefined || isNaN(parseFloat(element.new_price)) || element.product_code === undefined || isNaN(parseInt(element.product_code))))

  if(isValid) {
    productsFormat(productCSV,products,setProductsTable);
  } else {
    alert('arquivo fora do padrão')
  }
}

export {
  productsFormat,
  regrasNegocio,
  validateButtonClick,
}