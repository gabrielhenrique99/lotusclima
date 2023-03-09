import React from 'react'
import { Link } from 'react-router-dom'


const Footer = ({cityName}) => {
  return (
    <div>
      <Link to={`details/${cityName}`}>Exibir Detalhes</Link>
    </div>
  )
}

export default Footer