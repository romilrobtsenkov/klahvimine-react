import React from 'react'

import { Link } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <div className="catch-of-the-day">
        <p>Welcome to app page</p>
        <Link to="/game"><button>Load Game</button></Link>
        <Link to="/scores"><button>Scores</button></Link>
      </div>
    )
  }
}

export default App
