import React from 'react'
import Header from './components/Header'
import Clima from './components/Clima'
import './app.css'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='container'>
        <Header/> 
        <Clima/>
        <Footer/>

    </div>
  )
}

export default App