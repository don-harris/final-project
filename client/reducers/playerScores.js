import {SCORE_EACH_ROUND} from '../actions/playerScores'

export default function playerScores (state = [], action) {
  switch (action.type) {
    case SCORE_EACH_ROUND:
      return [...state, action.playerScores]
    default:
      return state
  }
}
