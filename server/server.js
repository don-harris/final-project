const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const routes = require('./routes/videos')

const server = express()

server.use(cors('*'))

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/v1', routes)

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

module.exports = server
