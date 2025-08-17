import React from 'react'
import './navbar.css'

const NavbarMain = () => {
  return (
    <nav className='navbar'>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#resume">Resume</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
}

export default NavbarMain
