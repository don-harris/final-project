export const FIND_CURRENT_PLAYER = 'FIND_CURRENT_PLAYER'

export const findCurrentPlayer = (players) => {
  return {
    type: 'FIND_CURRENT_PLAYER',
    players: players
  }
}
