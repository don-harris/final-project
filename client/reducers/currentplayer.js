import { FIND_CURRENT_PLAYER } from '../actions/currentplayer.js'

export default function findCurrentPlayer (state = [], action) {
  switch (action.type) {
    case 'FIND_CURRENT_PLAYER':
      // console.log('This is action.players: ', action.players)
      return {
        currentPlayer: action.players[0]
      }
    default:
      return state
  }
}
