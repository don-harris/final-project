import {NEXT_VIDEO} from '../actions/videoChanger.js'

export default function videoChanger (state = [], action) {
  switch (action.type) {
    case NEXT_VIDEO:
      action.remainingVideos.filter(remainingVid => remainingVid.vid_url !== action.currentvid.vid_url)
    default:
      return state
  }
}
