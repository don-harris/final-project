const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const videos = require('./routes/videos')
const winners = require('./routes/winners')
const memes = require('./routes/memes')

const server = express()

server.use(cors('*'))

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1', videos)
server.use('/api/v1/winners', winners)
server.use('/api/v1/memes', memes)

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

module.exports = server
