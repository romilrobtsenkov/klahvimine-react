import * as types from '../constants/ActionTypes'

const INITIAL_STATE = {
  error: '',
  games: []
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
  case types.GET_GAMES:
    return {
      ...state,
      games: action.payload
    }
  default:
    return {
      ...state
    }
  }
}
