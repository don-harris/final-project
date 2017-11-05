import {NEXT_VIDEO} from '../actions/videoChanger.js'

export default function videoChanger (state = [], action) {
  switch (action.type) {
    case NEXT_VIDEO:
      return {
        currentVideo: action.currentVideo,
        remainingVideos: action.remainingVideos
      }
    default:
      return state
  }
}
