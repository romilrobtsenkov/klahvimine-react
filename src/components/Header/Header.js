import React, { Component } from 'react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'

import { logout } from 'actions/LoginActions'

import './header.scss'
import img from 'media/logo.svg'

class Header extends Component {
  render() {
    //console.log(this.state)
    const { isAuthenticated, user } = this.props.login
    //console.log(this.props)
    // console.log(isAuthenticated)
    // console.log('siin')

    return (
      <header>
        <p>Header</p>
        <button onClick={this.props.logout}>logout</button>
        <img className="header-logo" src={img} />
        <h2>
          {isAuthenticated &&
            <p>
              Welcome {user.token}
            </p>}
        </h2>
      </header>
    )
  }
}

Header.propTypes = {
  login: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    login: state.login
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
