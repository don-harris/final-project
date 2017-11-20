import {RECEIVE_VIDEOS} from '../actions/videos'
import {RECEIVE_MEMES} from '../actions/memes'

function videos (state = [], action) {
  switch (action.type) {
    case RECEIVE_VIDEOS:
      return [...action.videos]
    case RECEIVE_MEMES:
      return [...action.memes]
    default:
      return state
  }
}

export default videos
