import React from 'react'
import logo from '../assets/logo.png'

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <a href="/"><img src={logo} alt="Cat Logo" /></a> 
      </div>
      <nav className="navigation">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/cats">Browse Cats</a></li>
          <li><a href="/cats">Add A Cat</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header