export const ADD_PLAYERS = 'ADD_PLAYERS'
export const START_ROUND = 'START_ROUND'
export const NEXT_PLAYER = 'NEXT_PLAYER'

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

export const nextPlayer = ({id, score, video}, current, remaining, number) => {
  const nextRoundNumber = getNextRoundNumber(remaining, number)
  return {
    type: NEXT_PLAYER,
    roundNumber: nextRoundNumber,
    playerScore: {id, score},
    videosPlayed: video,
    currentPlayer: remaining[0],
    remainingPlayers: remaining.slice(1)
  }
}

function getNextRoundNumber (remainingPlayers, roundNumber) {
  return remainingPlayers.length > 0 ? roundNumber + 1 : roundNumber
}

// export function addAllPlayersAsync (players) {
//   return dispatch => {
//     addAllPlayers(players)

//     // .catch(err => {
//     //   dispatch(showError(err.message))
//     // })
//   }
// }
