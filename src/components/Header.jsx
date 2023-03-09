import React from 'react'
import '../styles/header.css'

const Header = () => {
  return (
   
        <div className="form">
        <h3>Confira o clima de uma cidade:</h3>
        <div className="form-input-container">
            <input
            type="text"
            placeholder="Digite o nome da cidade"
            id="city-input"
        />

        <button id="search">
            <i className="fa-solid fa-magnifying-glass"></i>
        </button>
        </div>
    </div>
  )
}

export default Header