import {RECEIVE_WINNERS} from '../actions/winners'

function winners (state = [], action) {
switch (action.type) {
  case RECEIVE_WINNERS:
    return [...action.winners]
  default:
    return state
  }
}

export default winners