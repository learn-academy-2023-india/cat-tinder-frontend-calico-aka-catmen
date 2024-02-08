import React from 'react'
import notFoundImage from '../assets/404.png' 

const NotFound = () => {
    return (
      <div className="not-found">
        <img src={notFoundImage} alt="404 Not Found" className="not-found-img" />
      </div>
    )
  }

export default NotFound