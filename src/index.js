import React from 'react'
import { render } from 'react-dom'

import './stylesheets/main.scss'

import Routes from './Routes'
import Header from 'components/Header/Header'

const Root = () => {
  return (
    <div className="button">
      <Header />
      <Routes />
    </div>
  )
}

render(<Root />, document.querySelector('#main'))
