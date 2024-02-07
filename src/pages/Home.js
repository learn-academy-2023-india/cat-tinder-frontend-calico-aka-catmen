import React from 'react'
import homeImage from '../assets/home.png' 

const Home = () => {
  return (
    <div className="home-container">
      <img src={homeImage} alt="Home" className="home-img" />
    </div>
  )
}

export default Home