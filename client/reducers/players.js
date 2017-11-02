import { ADD_PLAYERS } from '../actions/players.js'

export default function players (state = [], action) {
  switch (action.type) {
    case ADD_PLAYERS:
      return action.players
    default:
      return state
  }
}
