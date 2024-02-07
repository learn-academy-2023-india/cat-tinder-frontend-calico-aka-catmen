import React from 'react'
import { Nav, NavItem } from "reactstrap"
import { NavLink } from "react-router-dom"
import logo from '../assets/logo.png'

const Header = () => {
  return (
    <Nav className="header-nav">
      <NavItem>
        <Nav className="header-logo">
        <NavLink to="/">
          <img 
          src={logo} 
          alt="Cat Tinder logo with outline of cat" 
          />
        </NavLink>
        </Nav>
        
          <NavItem>
            <NavLink to="/" className="nav-link"> Home </NavLink>
            <NavLink to="/about" className="nav-link">About</NavLink>
            <NavLink to="/cats" className="nav-link">Browse Cats</NavLink>
            <NavLink to="/cats" className="nav-link">Add A Cat</NavLink>
            <NavLink to="/contact" className="nav-link">Contact</NavLink>
          </NavItem>
        
      </NavItem>
    </Nav>
  )
}


export default Header