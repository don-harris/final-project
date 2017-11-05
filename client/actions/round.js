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

export const startRound = (current, remaining, currentVideo, remainingVideos) => {
  return {
    type: START_ROUND,
    roundNumber: 1,
    currentPlayer: current,
    remainingPlayers: remaining,
    currentVideo: currentVideo,
    remainingVideos: remainingVideos
  }
}

export const nextPlayer = ({id, score, video}, current, remaining, number, remainingVideos) => {
  // const nextRoundNumber = getNextRoundNumber(remaining, number, current)
  return {
    type: NEXT_PLAYER,
    roundNumber: number,
    playerScore: {id, score},
    currentPlayer: remaining[0],
    remainingPlayers: remaining.slice(1),
    currentVideo: remainingVideos[0],
    remainingVideos: remainingVideos.slice(1)
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
