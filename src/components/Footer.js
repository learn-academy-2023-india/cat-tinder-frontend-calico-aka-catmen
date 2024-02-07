import React from 'react'
import { Nav } from "reactstrap"
import { NavLink } from "react-router-dom"

const Footer = () => {
  return (
    <Nav className="footer">
      <p>&copy; {new Date().getFullYear()} Cat Tinder. All rights reserved. Made with <span role="img" aria-label="heart">💜</span> by Calico</p>
      <Nav className="footer-links"> 
        <NavLink to="/privacy" className="nav-link">Privacy Policy</NavLink> | 
        <NavLink to="/terms" className="nav-link">Terms of Use
        </NavLink>
      </Nav>
    </Nav>
  )
}

export default Footer