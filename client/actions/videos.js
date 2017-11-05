import request from 'superagent'

export const receiveVideos = (videos) => {
  return {
    type: 'RECEIVE_VIDEOS',
    videos
  }
}

export function getVideos () {
  return (dispatch) => {
    request 
      .get('/api/v1/videos')
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(receiveVideos(res.body))
      })

  }
}