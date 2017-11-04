import {END_ROUND} from '../actions/round.js'

export default function game (state = [], action) {
  switch (action.type) {
    case END_ROUND:
      return [...state, action.round]
    default:
      return state
  }
}

// {
//   type: 'END_ROUND',
//     round: {
//     roundNumber: 1,
//       playerScores: [{ id: 1, score: 2 }, { id: 2, score: 1 }],
//         videosPlayed: [2, 1]
//   }
// }
