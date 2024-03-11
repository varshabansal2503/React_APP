import { useState } from 'react'
import Navbar from './Components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'


import './Components/style.css'
import Hero from './Components/Hero'
import Delivery from './Components/Delivery'
import Healthy from './Components/Healthy'
import Product from './Components/Product'
import Productts from './Components/Productts'
import Footer from './Components/Footer'

function App() {
  

  return (
    <>
     <Navbar/>
      <Hero/>
      <Delivery/>
      <Healthy/>
      <Product/>
      <Productts/>
      <Footer/>
    </>
  )
}

export default App
