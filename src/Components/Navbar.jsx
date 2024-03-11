import React from 'react'
import Logo from '../assets/images/Sabzi.png'



const Navbar = () => {
  return (
    
      <div className="container-fluid px-5 header stickey-top">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-2 mb-4 border-bottom border-dark">
        <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
          <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"/></svg>
          <img src={Logo} alt="" />
        </a>
  
        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#" className="nav-link px-2 menu-color">Home</a></li>
          <li><a href="#" className="nav-link px-2  menu-color">Products</a></li>
          
          <li><a href="#" className="nav-link px-2 menu-color">About</a></li>
        </ul>
  
        <div className="col-md-3 text-end">
         <i classNameName="bi bi-search fs-3 me-4"></i>
         <i classNameName="bi bi-cart fs-3">o</i>
        </div>
      </header>
    </div>
  )
}

export default Navbar
