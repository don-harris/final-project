// import {GET_PLAYERS} from '../actions/rounds.js'
import {ADD_PLAYERS} from '../actions/rounds.js'

export default function rounds (state = {}, action) {
  console.log(action)
  switch (action.type) {
    case 'START_ROUND':
      return {
        roundNumber: action.roundNumber,
        playerScores: [],
        videosPlayed: [],
        remainingPlayers: action.players
      }
    case 'ADD_PLAYERS':
      return {
        roundNumber: null,
        playerScores: [],
        videosPlayed: [],
        remainingPlayers: action.players
      }

    default:

      return state
  }
}

//       const remainingPlayers = action.players.filter(player => player.name !== currentPlayer.name)
