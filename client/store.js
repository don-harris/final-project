import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import remoteActionMiddleware from './remote_action_middleware'
import { socket } from './index'

import reducers from './reducers'

export default createStore(reducers, compose(
  applyMiddleware(thunkMiddleware, remoteActionMiddleware(socket)),
  window.devToolsExtension ? window.devToolsExtension() : f => f
))
