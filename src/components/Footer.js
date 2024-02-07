import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Cat Tinder. All rights reserved. Made with <span role="img" aria-label="heart">💜</span> by Calico</p>
      <div className="footer-links"> 
        <a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms of Use</a>
      </div>
    </footer>
  )
}

export default Footer