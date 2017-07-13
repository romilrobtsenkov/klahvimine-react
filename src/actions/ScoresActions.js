import Api from 'utils/api'
import * as types from 'constants/ActionTypes'

export const getUserGames = () => {
  return dispatch => {
    return Api('get', '/games/')
      .then(data => {
        console.log(data)

        dispatch({
          type: types.GET_GAMES,
          payload: data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }
}
