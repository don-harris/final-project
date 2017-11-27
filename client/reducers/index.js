import {combineReducers} from 'redux'

import players from './players'
import round from './round'
import videos from './videos'
import currentPlayer from './currentplayer'
import playerScores from './playerScores'
import game from './game'
import winners from './winners'
import reducer from './reducer'

export default combineReducers({
  reducer,
  players,
  round,
  videos,
  currentPlayer,
  playerScores,
  game,
  winners
})
