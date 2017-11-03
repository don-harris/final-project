import React from 'react'
import {shallow, mount} from 'enzyme'

import Homepage from '../../client/components/Homepage'
import './setup-dom'

Homepage.prototype.componentDidMount = () => {}

test('Title renders on homepage', () => {
  const wrapper = shallow(<Homepage />)
  expect(wrapper.find('h1').text()).toBe('Spoken, Not Stirred')
})
