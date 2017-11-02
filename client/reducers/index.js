import {combineReducers} from 'redux'

import players from './players'
import rounds from './rounds'

export default combineReducers({
  players,
  rounds
})
