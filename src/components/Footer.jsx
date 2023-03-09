import React from 'react'
import { Link } from 'react-router-dom'
import Detalhes from '../routes/Detalhes'

const Footer = () => {
  return (
    <div>
      <Link to={`/detalhes`}>Exibir Detalhes</Link>
    </div>
  )
}

export default Footer