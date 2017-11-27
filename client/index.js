import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'

import App from './components/App'

import store from './store'

import io from "socket.io-client";

const socket = io(`${location.protocol}//${location.hostname}:8090`);
socket.on("state", state => store.dispatch({ type: "SET_STATE", state }));

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app')
  )
})
