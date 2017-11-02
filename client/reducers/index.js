import {combineReducers} from 'redux'

import players from './players'
import videos from './videos'

export default combineReducers({
  players,
  videos
})
