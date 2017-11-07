import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import Header from "./Header"

const HallOfFame = props => {

  return (
  <div className="container">
        <Header />
        <h1 className="leadertitle title is-1">Hall of Fame</h1>
        <table className="table is-bordered is-fullwidth is-striped">
          <thead className="thead">
            <tr className="tr">
              <th className="th has-text-centered">Name</th>
              <th className="th has-text-centered">Icon</th>
              <th className="th has-text-centered">Score</th>
            </tr>
          </thead>
          <tbody className="tbody">
            {props.winners.map((winner) => {
            console.log(props.winners)
              return <tr className="tr" key={winner.name}>
                <th className="th has-text-centered">{winner.name} </th>
                <th className="th has-text-centered">
                    <img src={winner.icon} />
                </th>
                <th className="th has-text-centered">{winner.score} </th>
              </tr>
            })}
         </tbody>
        </table>
      <Link to="/">
        <button className="button is-large is-danger">Back to Home</button>
      </Link>
  </div>
  )
}

function mapStateToProps (state){
  return {
    winners: state.winners
  }
}
export default connect(mapStateToProps)(HallOfFame)