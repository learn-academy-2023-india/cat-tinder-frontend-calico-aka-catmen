import React from 'react'
import { Nav, NavItem } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'

const Header = () => {
  return (
      <Nav className="header-nav">
        <NavItem>
          <NavLink to="/">
            <img src={logo} alt="Cat Logo" className="header-logo" />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/catindex" className="nav-link">Meet All the Cats</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/catnew" className="nav-link">Add Your Cat</NavLink>
        </NavItem>
        <NavItem>
          <a
            target="_blank"
            href="https://www.aspca.org/adopt-pet/adoptable-cats-your-local-shelter"
            className="nav-link"
            rel="noopener noreferrer"
          >
            Adopt a Cat!
          </a>
        </NavItem>
      </Nav>
  )
}

export default Header