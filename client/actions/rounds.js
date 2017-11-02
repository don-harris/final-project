export const ADD_PLAYERS = 'ADD_PLAYERS'
export const START_ROUND = 'START_ROUND'

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

// export function addAllPlayersAsync (players) {
//   return dispatch => {
//     addAllPlayers(players)

//     // .catch(err => {
//     //   dispatch(showError(err.message))
//     // })
//   }
// }
