import {combineReducers} from 'redux'

import players from './players'
import round from './round'
import videos from './videos'
import currentPlayer from './currentplayer'
import game from './game'

export default combineReducers({
  players,
  round,
  videos,
  currentPlayer,
  game
})
