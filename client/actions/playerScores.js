export const SCORE_EACH_ROUND = 'SCORE_EACH_ROUND'

export const playerScores = (score, {name, id, icon}) => {
  return {
    type: SCORE_EACH_ROUND,
    playerScores: {
      score,
      name,
      id,
      icon
    }
  }
}
