import React from 'react'
import {connect} from 'react-redux'
import {addAllPlayers} from '../actions/players'

class Players extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      // players: [{icon: 'icon1', name: 'Bob'}, {icon: null, name: 'Harrison'}]
      players: [],
      pendingPlayer: {icon: null, name: ''}
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
    pendingPlayer = {icon: null, name: ''}
    this.setState({players, pendingPlayer})
  }

  submitAllPlayers (e) {
    e.preventDefault()
    this.props.dispatch(addAllPlayers(this.state.players))
    this.props.history.push('/round')
  }

  render () {
    const {players, pendingPlayer} = this.state
    return (
      <form className="form container" >
        <div>
          {players.map((player, i) => <p key={i}>{player.name} <img src={player.icon}/></p>)}
        </div>
        <input autoComplete="off" className="input" type="text" name="name" placeholder="Add Player Name..." value={pendingPlayer.name} onChange={this.handleChange} />
        <div className="control">
          {/* <div className="select">
            <select name="icon" onChange={this.handleChange} >
              <option>Select your icon</option>
              <option style={{backgroundImage: 'url(/images/braveheart.png)'}}></option>
              {/* <option ><img src="/images/darthvader.png" /></option>
              <option style="back"><img src="/images/hunter.png" /></option>
              <option style="back"><img src="/images/kruger.png" /></option>
              <option style="back"><img src="/images/runlolarun.png" /></option>
              <option style="back"><img src="/images/space.png" /></option> */}
          {/* </select> */}
          {/* </div> */} 

          <div className="control">
            <label className="radio">
              <input type="radio" name="icon" onChange={this.handleChange} />
              <img src="/images/braveheart.png" />
            </label>
            <label className="radio">
              <input type="radio" name="icon" onChange={this.handleChange} />
              <img src="/images/darthvader.png" />
            </label>
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
