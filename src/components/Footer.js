import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Cat Tinder. All rights reserved. Made with <span role="img" aria-label="heart">💜</span> by Calico</p>
        <div className="footer-links">
          <NavLink to="/about">About</NavLink> | <NavLink to="/contact">Contact</NavLink> | <NavLink to="/privacy">Privacy Policy</NavLink> | <NavLink to="/terms">Terms of Use</NavLink>
        </div>
      </div>
    </footer>
  )
}

export default Footer