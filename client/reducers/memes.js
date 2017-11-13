import {ENABLE} from '../actions/memes'

export default function memes (state = false, action) {
  switch (action.type) {
    case 'ENABLE':
      return true
    default:
      return state
  }
}
