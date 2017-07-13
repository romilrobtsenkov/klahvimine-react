import Header from 'components/Header/Header'

import { BrowserRouter } from 'react-router-dom'

import { createBrowserHistory } from 'history'

//import { setCurrentUser, logout } from './containers/Login/LoginActions'

// let token = sessionStorage.jwtToken
// if (token) {
//   //store.dispatch(setCurrentUser(jwtDecode(sessionStorage.jwtToken)))

//   // CORRECT store.dispatch(setCurrentUser({ token: token }))

//   console.log('ROUTE ' + window.location.pathname)
//   /*window.setTimeout(() => {
//     console.log('invalid')
//     //logout()
//     store.dispatch(logout())
//   }, 2000)*/
// }

import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from 'containers/Home'
import Game from 'containers/Game'
import Scores from 'containers/Scores'
import NotFound from 'containers/NotFound'
import Login from 'containers/Login'

import RouteCheck from 'utils/RouteCheck'
//import RouteWrapper from './middleware/RouteWrapper'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <BrowserRouter history={createBrowserHistory()}>
          <Switch>
            <Route exact path="/" restrict component={RouteCheck(Home)} />
            <Route
              exact
              path="/game"
              name="test"
              component={RouteCheck(Game)}
            />
            <Route exact path="/scores" component={RouteCheck(Scores, true)} />
            <Route exact path="/login" component={RouteCheck(Login)} />
            <Route component={RouteCheck(NotFound)} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
