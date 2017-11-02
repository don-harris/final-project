import {ADD_PLAYERS} from '../actions/rounds.js'

export default function rounds (state = [], action) {
  // console.log('This is action: ', action.remainingPlayers)
  switch (action.type) {
    case 'START_ROUND':
      return [...state,
        {
          roundNumber: action.roundNumber,
          playerScores: [],
          videosPlayed: [],
          currentPlayer: action.currentPlayer,
          remainingPlayers: action.remainingPlayers
        }
      ]
    default:
      return state
  }
}

//       const remainingPlayers = action.players.filter(player => player.name !== currentPlayer.name)
