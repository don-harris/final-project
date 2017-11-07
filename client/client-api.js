import request from 'superagent'

export function getWinners () {
  return request
    .get('/api/v1/videos')
    }