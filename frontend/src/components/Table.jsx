import React from 'react';
import './Table.css'

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
          <td>{product.regras}</td>
        </tr>
      ))
      }
      </tbody>
    </table>
  )
}
