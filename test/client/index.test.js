import React from 'react'
import {shallow, mount} from 'enzyme'
import './setup-dom'

import Homepage from '../../client/components/Homepage'
import Instructions from "../../client/components/Instructions";
import Header from "../../client/components/Header";
import Leaderboard from "../../client/components/Leaderboard";

test('Title renders on homepage', () => {
  const wrapper = shallow(<Homepage />)
  expect(wrapper.find('h1').text()).toBe('Spoken, Not Stirred')
})

test("Actors guide renders on instructions", () => {
  const wrapper = shallow(<Instructions />);
  expect(wrapper.find("h1").first().text()).toBe("Actors Guide")
});

test("Title renders on Header component", () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.find("h1").first().text()).toBe("Spoken,")
});
