import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return <>

<nav className="navbar navbar-expand-lg test fixed-top">
  <div className="container">
    <NavLink className="navbar-brand text-uppercase fw-bolder text-light" to={'/'}> <h1>Start Framework</h1></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link text-uppercase" aria-current="page" to={'about'}>about</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-uppercase"  to={'portfolio'}>portfolio</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-uppercase"  to={'contact'}>contact</NavLink>
        </li>
       
      </ul>
    
    </div>
  </div>
</nav>

 {/* <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid d-flex justify-content-between">
    <NavLink className="navbar-brand text-uppercase" to={'/'}>Start Framework</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link text-uppercase" aria-current="page" to={'about'}>About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-uppercase" to={'portfolio'}>Portfolio</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-uppercase" to={'contact'}>Contact</NavLink>
        </li>
      </ul>
      
    </div>
  </div>
</nav> */}

  
  
  </>
}
