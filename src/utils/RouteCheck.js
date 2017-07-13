import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

import { checkUser } from 'actions/AuthActions'
//import store from 'store/configureStore'

export default function(ComposedComponent, restrict) {
  class RouteCheck extends React.Component {
    componentWillMount() {
      analytics(this.props.location.pathname)

      this.props.checkUser(this.props.isAuthenticated)
    }
    render() {
      if (
        restrict &&
        !this.props.isAuthenticated &&
        !this.props.authInProgress
      ) {
        return (
          <Redirect
            to={{
              pathname: '/login',
              search: '?redirect=' + this.props.location.pathname
            }}
          />
        )
      } else if (!this.props.authInProgress) {
        return <ComposedComponent {...this.props} />
      } else {
        return <div>Loading...</div>
      }
    }
  }

  RouteCheck.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    authInProgress: PropTypes.bool.isRequired,
    location: PropTypes.object.isRequired,
    checkUser: PropTypes.func.isRequired
  }

  RouteCheck.contextTypes = {
    router: PropTypes.object.isRequired
  }

  function mapStateToProps(state) {
    return {
      isAuthenticated: state.auth.isAuthenticated,
      authInProgress: state.auth.authInProgress
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
      checkUser: isAuthenticated => dispatch(checkUser(isAuthenticated))
    }
  }

  function analytics(route) {
    //console.log('ROUTE:' + route)
  }

  return connect(mapStateToProps, mapDispatchToProps)(RouteCheck)
}
