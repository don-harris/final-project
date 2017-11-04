import request from 'superagent'

export function getVidData (callback) {
  return request
    .get('/api/v1/videos')
    .end((err, res) => {
      if (err) {
        callback(err)
      } else {
        callback(null, res.body)
      }
    })
}