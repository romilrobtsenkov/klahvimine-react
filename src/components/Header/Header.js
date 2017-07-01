import React, { Component } from 'react'

import './header.scss'

import img from 'media/logo.svg'

class Header extends Component {
  render() {
    return (
      <header>
        <p>Header</p>
        <img className="header-logo" src={img} />
      </header>
    )
  }
}

export default Header
