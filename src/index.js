import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import store from 'store/configureStore'

import App from 'containers/App/App'
import './stylesheets/index.scss'

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#main')
)
