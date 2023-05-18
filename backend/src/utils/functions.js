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

module.exports = {
  regrasNegocio,
}