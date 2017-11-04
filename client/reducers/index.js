import {combineReducers} from 'redux'

import players from './players'
import round from './round'
import videos from './videos'
import currentPlayer from './currentplayer'
import playerScores from './playerScores'

export default combineReducers({
  players,
  round,
  videos,
  currentPlayer,
  playerScores
})
