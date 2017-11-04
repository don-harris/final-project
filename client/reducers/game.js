import {END_ROUND, RESET_GAME} from '../actions/round.js'

export default function game (state = [], action) {
  switch (action.type) {
    case END_ROUND:
      return [...state, action.round]
    case RESET_GAME:
      return []
    default:
      return state
  }
}