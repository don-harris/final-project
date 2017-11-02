import { GET_CURRENT_PLAYER } from '../actions/rounds.js'

export default function rounds (state = [], action) {
  switch (action.type) {
    case 'START_ROUND':
      return [
        ...state,
        {
          roundNumber: action.roundNumber,
          playerScores: [],
          videosPlayed: []
        }
      ]
    default:
      console.log({action})
      return state
  }
}

//       const remainingPlayers = action.players.filter(player => player.name !== currentPlayer.name)
