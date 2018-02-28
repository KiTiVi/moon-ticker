import React from 'react'
import { Link } from 'react-router-dom'

const WelcomeWindow = () => {
  return (
    <div className="welcome-window">
      <h2>Track your Coins!</h2>
      <p>
        Track your precious coins and watch them literally moon! MASSA
        PLACEHODLER MASSA PLACEHODLER MASSA PLACEHODLER MASSA PLACEHODLER MASSA
        PLACEHODLER MASSA PLACEHODLER MASSA PLACEHODLER MASSA PLACEHODLER{' '}
      </p>
      <Link to="/addcoin">Add coin</Link>
    </div>
  )
}

export default WelcomeWindow
