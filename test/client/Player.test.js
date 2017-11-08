import React from 'react'
import {shallow, mount} from 'enzyme'
import {Provider} from 'react-redux'

import { MemoryRouter as Router } from 'react-router-dom'

import store from '../../client/store'
import Players from '../../client/components/Players'
import './setup-dom'

test('Player page renders', () => {
  const wrapper = mount(<Provider store={store}>
    <Router>
      <Players />
    </Router>
  </Provider>)
  expect(wrapper.find('.box .title').text()).toBe('Join the cast')
})