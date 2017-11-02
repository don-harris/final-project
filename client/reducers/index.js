import {combineReducers} from 'redux'

import players from './players'
import rounds from './rounds'
import videos from './videos'

export default combineReducers({
  players,
  rounds,
  videos
})
