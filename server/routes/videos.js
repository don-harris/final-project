const express = require('express')
const router = express.Router()

const videosDb = require('../db/videos')

router.get('/round', (req, res) => {
  videosDb.getVideos()
    .then(videos => {
      res.json(videos)
    })
})

module.exports = router