export const ADD_PLAYERS = 'ADD_PLAYERS'
export const START_ROUND = 'START_ROUND'
export const END_PLAYER_TURN = 'END_PLAYER_TURN'

export const addAllPlayers = (players) => {
  return {
    type: ADD_PLAYERS,
    players: players
  }
}

export const startRound = (current, remaining) => {
  return {
    type: START_ROUND,
    roundNumber: 1,
    currentPlayer: current,
    remainingPlayers: remaining
  }
}

export const endPlayerTurn = (id, score, video) => {
  return {
    type: END_PLAYER_TURN,
    playerScore: {id, score},
    videosPlayed: video
  }
}

// export function addAllPlayersAsync (players) {
//   return dispatch => {
//     addAllPlayers(players)

//     // .catch(err => {
//     //   dispatch(showError(err.message))
//     // })
//   }
// }
