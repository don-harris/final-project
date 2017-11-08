import React from 'react'
import {shallow, mount} from 'enzyme'
import {Provider} from 'react-redux'
import "./setup-dom";

import {MemoryRouter as Router} from 'react-router-dom'

import store from '../../client/store'
import Leaderboard from '../../client/components/Leaderboard'
import './setup-dom'

test('Title renders on leaderboard', () => {
  const wrapper = mount(<Provider store={store}>
    <Router>
      <Leaderboard />
    </Router>
  </Provider>)
  expect(wrapper.find('.leadertitle').text()).toBe('And the nominations are...')
})
