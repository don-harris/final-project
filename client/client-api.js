import request from 'superagent'

export function getWinners () {
  return request
    .get('/api/v1/winners')
}

export function bringMemes () {
  return request
    .get('/api/v1/memes')
}
