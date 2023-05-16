import React from 'react'
import { regrasNegocio } from '../utils/functions'

export default function Table({products}) {
  return (
    <table>
      <thead>
        <tr>
          <th>Código</th>
          <th>Nome</th>
          <th>Preço Atual</th>
          <th>Novo Preço</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
      {products.map(product => (
        <tr key={product.code}>
          <td>{product.code}</td>
          <td>{product.name}</td>
          <td>{product.sales_price}</td>
          <td>{product.new_price}</td>
          <td>{regrasNegocio(product.new_price, product.sales_price, product.cost_price)}</td>
        </tr>
      ))
      }
      </tbody>
    </table>
  )
}
