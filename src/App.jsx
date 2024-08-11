import React from 'react'
import {Routes , Route} from "react-router-dom"
import Home from './pages/Home.jsx'
import Cart from './pages/Cart.jsx'
import Navbar from './Componants/Navbar.jsx'
import Login from './pages/Login.jsx'
import Card from './Componants/Card.jsx'

const App = () => {
 
  
  const user = localStorage.getItem("user");

  return (
    <div>
{   user && <Navbar/>
}     <Routes>
  <Route path="/" element = {<Home />} />
  <Route path="/Cart" element = {<Cart/>} />
  <Route path="/Login" element = {<Login/>} />

  </Routes>
    
 

    </div>
  )
}

export default App