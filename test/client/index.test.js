import React from 'react'
import {shallow, mount} from 'enzyme'
import { Provider } from "react-redux";
import './setup-dom'
import store from "../../client/store";
import { MemoryRouter as Router } from "react-router-dom";

import Homepage from '../../client/components/Homepage'
import Instructions from "../../client/components/Instructions";
import Header from "../../client/components/Header";
import Leaderboard from "../../client/components/Leaderboard";
import HallOfFame from "../../client/components/HallOfFame";
import Dictaphone from "../../client/components/Dictaphone";

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

test("Title renders on Hall of Fame", () => {
  const wrapper = mount(
    <Provider store={store}>
      <Router>
        <HallOfFame />
      </Router>
    </Provider>
  );
  expect(wrapper.find("h1").first().text()).toBe("Spoken,")
});
