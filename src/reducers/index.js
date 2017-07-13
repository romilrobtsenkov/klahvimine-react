import { combineReducers } from 'redux'

import auth from './auth'
import login from './login'
import scores from './scores'

const rootReducer = combineReducers({
  auth,
  login,
  scores
})

export default rootReducer
