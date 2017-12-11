import {bringMemes} from '../client-api.js'

export const ENABLE = 'ENABLE'
export const RECEIVE_MEMES = 'RECEIVE_MEMES'

export const enable = () => {
  return {
    type: ENABLE
  }
}

export const recieveMemes = (memes) => {
  return {
    type: RECEIVE_MEMES,
    memes
  }
}

export function getMemes () {
  return (dispatch) => {
    bringMemes()
      .then(res => dispatch(recieveMemes(res.body)))
      .catch(err => console.log(err.message))
  }
}
