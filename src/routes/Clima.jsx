import React from 'react'

import '../styles/clima.css'

const Clima = () => {
  return (
    <div id="weather-data" className="hide">
        <h2><i class="fa-solid fa-location-dot"></i> <span id="city"></span></h2>
        <p id="temperature"><span></span>&deg;C</p>
        <div id="description-container">
            <p id="description"></p>
            <img id="weather-icon" src="" alt="Condições atuais"/>
        </div>
        <div id="details-container">
            <p id="umidity">
                <i className="fa-solid fa-droplet"></i> 
                <span></span>
            </p>
            <p id="wind">
                <i className="fa-solid fa-wind"></i>
                <span></span>
            </p>
        </div>
  </div>
  )
}

export default Clima