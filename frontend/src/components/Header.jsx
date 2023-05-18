import React from 'react'
import './Header.css'
import Logo from './logo.png'

export default function Header() {
  return (
    <header>
      <img src={Logo} alt="logoshopper" />
      <h2>Ferramenta Atualização de Preço em Massa</h2>
    </header>
  )
}
