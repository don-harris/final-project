import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Players from './Players'
import Homepage from './Homepage'
import Round from './Round'
import Leaderboard from './Leaderboard'

const App = () => (
  <Router>
    <div className='app-container'>
      <Route exact path="/" component={Homepage} />
      <Route path="/players" component={Players} />
      <Route path="/round" component={Round} />
      <Route path="/leaderboard" component={Leaderboard} />
    </div>
  </Router>
)

export default App
