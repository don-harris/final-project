import React from 'react'
import {connect} from 'react-redux'
import {addAllPlayers} from '../actions/players'

class Players extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      // players: [{icon: 'icon1', name: 'Bob'}, {icon: null, name: 'Harrison'}]
      players: [],
      pendingPlayer: {id: null, icon: null, name: ''}
    }
    this.addPlayer = this.addPlayer.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.submitAllPlayers = this.submitAllPlayers.bind(this)
  }
  handleChange (evt) {
    const {pendingPlayer} = this.state
    pendingPlayer[evt.target.name] = evt.target.value
    this.setState({pendingPlayer})
  }
  addPlayer (evt) {
    evt.preventDefault()
    let {players, pendingPlayer} = this.state
    players.push(pendingPlayer)
    pendingPlayer = {id: null, icon: null, name: ''}
    this.setState({players, pendingPlayer})
  }

  submitAllPlayers (e) {
    e.preventDefault()
    const playersWithId = this.state.players.map((player, i) => {
      const newPlayers = Object.assign({}, player)
      newPlayers.id = i + 1
      return newPlayers
    })
    console.log('This is newPlayers: :', playersWithId)
    this.props.dispatch(addAllPlayers(playersWithId))
    this.props.history.push('/round')
  }

  render () {
    const {players, pendingPlayer} = this.state
    return (
      <form className="form container" >
        <div>
          {players.map((player, i) => <p key={i}>{player.name} {player.icon}</p>)}
        </div>
        <input autoComplete="off" className="input" type="text" name="name" placeholder="Add Player Name..." value={pendingPlayer.name} onChange={this.handleChange} />
        <div className="control">
          <div className="select">
            <select name="icon" onChange={this.handleChange} >
              <option>Select your icon</option>
              <option>icon 1</option>
              <option>icon 2</option>
              <option>icon 3</option>
              <option>icon 4</option>
              <option>icon 5</option>
              <option>icon 6</option>
            </select>
          </div>
          <button className="button" onClick={this.addPlayer}>Add Player</button>
        </div>
        <input className="button is large" type="button" onClick={this.submitAllPlayers} value="PLAY" />
      </form>
    )
  }
}

function mapStateToProps (state) {
  return {
    players: state.players || {}
  }
}

export default connect(mapStateToProps)(Players)
