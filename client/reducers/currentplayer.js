import { FIND_CURRENT_PLAYER } from '../actions/currentplayer.js'

export default function findCurrentPlayer (state = {}, action) {
  switch (action.type) {
    case 'FIND_CURRENT_PLAYER':
      return action.players[0]
    default:
      return state
  }
}
