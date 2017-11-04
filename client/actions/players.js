// import { showError } from './error-message'

export const ADD_PLAYERS = 'ADD_PLAYERS'
export const ADD_PLAYER_SCORE = 'ADD_PLAYER_SCORE'

export const addAllPlayers = (players) => {
  return {
    type: 'ADD_PLAYERS',
    players: players
  }
}

// export const addPlayerScore = (state, current) => {
//   const { id, score } = state
//   const { icon, name } = current
//   return {
//     type: 'ADD_PLAYER_SCORE',
//     icon,
//     name,
//     id,
//     score
//   }
// }

// function sumTotal (game) {
//   return game.reduce((totalExpense, round) => {
//     return totalExpense + parseFloat(expense.amount)
//   }, 0)
// }

// function calcPlayerTotals(game) {
//   game.forEach(function (round) {
//     round.playerScores.forEach(function (score) {
//       console.log(score.score)
//     })
//   })
// }

// export function addAllPlayersAsync (players) {
//   return dispatch => {
//     addAllPlayers(players)

//     // .catch(err => {
//     //   dispatch(showError(err.message))
//     // })
//   }
// }
