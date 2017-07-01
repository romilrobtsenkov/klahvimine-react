import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import App from 'containers/App'
import Game from 'containers/Game'
import Scores from 'containers/Scores'
import NotFound from 'containers/NotFound'

class Routes extends React.Component {
  render() {
    return (
      <Router history={History}>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/game" component={Game} />
          <Route exact path="/scores" component={Scores} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    )
  }
}

export default Routes
