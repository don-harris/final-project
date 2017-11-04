import {combineReducers} from 'redux'

import players from './players'
import round from './round'
import game from './game'
// import videos from './videos'
// import currentPlayer from './currentplayer'

export default combineReducers({
  players,
  round,
  game
  // videos,
  // currentPlayer
})
