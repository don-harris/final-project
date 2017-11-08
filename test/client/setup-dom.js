require('babel-register')

const { JSDOM } = require('jsdom')

const storage = {}

const dom = new JSDOM('<body></body>')

global.window = dom.window
global.document = dom.window.document
global.navigator = dom.window.navigator
