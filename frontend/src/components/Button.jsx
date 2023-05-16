import React from 'react'
import './Button.css'

export default function Button({text, disabled, onClick}) {
  return (
    <button disabled={disabled} onClick={onClick}>{text}</button>
  )
}
