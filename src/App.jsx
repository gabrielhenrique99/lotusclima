import React from 'react'
import Header from './components/Header'
//import { Outlet } from 'react-router-dom'
import './app.css'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Clima from './routes/Clima'
import Detalhes from './routes/Detalhes'

const App = () => {
  return (
    <BrowserRouter>
    <div className="container">
      <Header />
      <Routes>
        <Route path='/' element={<Clima />} />
        <Route path='/detalhes' element={<Detalhes />} />
      </Routes>
      <Footer />
      </div>
    </BrowserRouter>

   /* <div className='container'>
        <Header/> 
        <Outlet />
        <Footer/>

    </div>*/
  )
}

export default App