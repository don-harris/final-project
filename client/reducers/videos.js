import {RECEIVE_VIDEOS} from '../actions/videos'

function videos (state=[], action) {
  switch (action.type) {
    case 'RECEIVE_VIDEOS':
    return [...action.videos]
  default:
    return state
  }
}

export default videos