export const ADD_PLAYERS = 'ADD_PLAYERS'
export const START_ROUND = 'START_ROUND'
export const NEXT_PLAYER = 'NEXT_PLAYER'
export const END_ROUND = 'END_ROUND'
export const RESET_GAME = 'RESET_GAME'

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
  // const nextRoundNumber = getNextRoundNumber(remaining, number, current)
  return {
    type: NEXT_PLAYER,
    roundNumber: number,
    playerScore: {id, score},
    videosPlayed: video,
    currentPlayer: remaining[0],
    remainingPlayers: remaining.slice(1)
  }
}

export const endRound = (round) => {
  return {
    type: END_ROUND,
    round
  }
}

export const resetGame = () => {
  return {
    type: RESET_GAME
  }
}

// function getNextRoundNumber (remainingPlayers, roundNumber, currentPlayer) {
//   return remainingPlayers.length > 0 && currentPlayer.length > 0 ? roundNumber + 1 : roundNumber
// }

// export function addAllPlayersAsync (players) {
//   return dispatch => {
//     addAllPlayers(players)

//     // .catch(err => {
//     //   dispatch(showError(err.message))
//     // })
//   }
// }
