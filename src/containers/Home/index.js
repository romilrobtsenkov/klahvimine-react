import React from 'react'

import { Link } from 'react-router-dom'

class Home extends React.Component {
  render() {
    return (
      <div className="catch-of-the-day">
        <p>Welcome to Home page</p>
        <Link to="/game">
          <button>Load Game</button>
        </Link>
        <Link to="/scores">
          <button>Scores</button>
        </Link>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>
    )
  }
}

export default Home
