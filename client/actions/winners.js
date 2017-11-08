import request from 'superagent'

import {getWinners} from '../client-api'

export const RECEIVE_WINNERS = 'RECEIVE_WINNERS'

export const receiveWinners = (winners) => {
  return {
    type: RECEIVE_WINNERS,
    winners
  }
}

export function getAllWinners () {
  return dispatch => {
    getWinners()
      .then (res => {
        dispatch(receiveWinners(res.body))
      })
      .catch(err => {
        return console.error(err.message)
      })
  }
}

export function addWinner () {
  return (dispatch) => {
    request 
      .post('/api/v1/winners')
      .end((err, res) => {
          if(err) {
            console.error(err.message)
            return
          }
          dispatch(getAllWinners(res.body))
      })
  }
}
