import React from 'react'
import {shallow, mount} from 'enzyme'
import './setup-dom'

import Homepage from '../../client/components/Homepage'
import Instructions from "../../client/components/Instructions";
import Header from "../../client/components/Header";
import Leaderboard from "../../client/components/Leaderboard";

Homepage.prototype.componentDidMount = () => {}

test('Title renders on homepage', () => {
  const wrapper = shallow(<Homepage />)
  expect(wrapper.find('h1').text()).toBe('Spoken, Not Stirred')
})

Instructions.prototype.componentDidMount = () => {};

test("Actors guide renders on instructions", () => {
  const wrapper = shallow(<Instructions />);
  expect(wrapper.find("h1").first().text()).toBe("Actors Guide");
});

Header.prototype.componentDidMount = () => {};

test("Title renders on Header component", () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.find("h1").first().text()).toBe("Spoken,");
});

Leaderboard.prototype.componentDidMount = () => {};

test("Title renders on Leaderboard component", () => {
  const wrapper = shallow(<Leaderboard />);
  expect(
    wrapper
      .find("h1")
      .first()
      .text()
  ).toBe("Spoken,");
});
