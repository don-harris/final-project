import React from 'react'
import {connect} from 'react-redux'
import {addAllPlayers} from '../actions/players'

class Players extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      // players: [{icon: 'icon1', name: 'Bob'}, {icon: null, name: 'Harrison'}]
      players: [],
      pendingPlayer: {icon: null, name: ''},
      dropdownActive: false
    }
    this.addPlayer = this.addPlayer.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.submitAllPlayers = this.submitAllPlayers.bind(this)
    this.toggleDropDown = this.toggleDropDown.bind(this)
  }
  selectIcon () {

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
  toggleDropDown (dropdownActive) {
    this.setState({dropdownActive})
  }
  submitAllPlayers (e) {
    e.preventDefault()
    this.props.dispatch(addAllPlayers(this.state.players))
    this.props.history.push('/round')
  }

  render () {
    const {players, pendingPlayer} = this.state
    return (
      <div>
        <div>
          {players.map((player, i) => <p key={i}>{player.name} <img src={player.icon}/></p>)}
        </div>
        <input autoComplete="off" className="input" type="text" name="name" placeholder="Add Player Name..." value={pendingPlayer.name} onChange={this.handleChange} />

        <div className="control">
          <div className={`dropdown ${this.state.dropdownActive ? 'is-active' : ''}`} onMouseEnter={() => this.toggleDropDown(true)} onMouseLeave={() => this.toggleDropDown(false)}>
            <div className="dropdown-trigger">
              <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
                <span>Select Icon</span>
                <span className="icon is-small">
                  <i className="fa fa-angle-down" aria-hidden="true"></i>
                </span>
              </button>
            </div>
            <div className="dropdown-menu" id="dropdown-menu" role="menu">
              <div className="dropdown-content" name="icon">
                <a className="dropdown-item"><img src="/images/braveheart.png" /></a>
                <a className="dropdown-item"><img src="/images/darthvader.png" /></a>
                <a className="dropdown-item"><img src="/images/hunter.png" /></a>
                <a className="dropdown-item"><img src="/images/kruger.png" /></a>
                <a className="dropdown-item"><img src="/images/runlolarun.png" /></a>
                <a className="dropdown-item"><img src="/images/space.png" /></a>
              </div>
            </div>
          </div>

          {/* <div className="control">
            <label className="radio">
              <input type="radio" name="icon" onChange={this.handleChange} />
              <img src="/images/braveheart.png" />
            </label>
            <label className="radio">
              <input type="radio" name="icon" onChange={this.handleChange} />
              <img src="/images/darthvader.png" />
            </label>
            <label className="radio">
              <input type="radio" name="icon" onChange={this.handleChange} />
              <img src="/images/hunter.png" />
            </label>
            <label className="radio">
              <input type="radio" name="icon" onChange={this.handleChange} />
              <img src="/images/kruger.png" />
            </label>
            <label className="radio">
              <input type="radio" name="icon" onChange={this.handleChange} />
              <img src="/images/runlolarun.png" />
            </label>
            <label className="radio">
              <input type="radio" name="icon" onChange={this.handleChange} />
              <img src="/images/space.png" />
            </label>aria-hidden="true"
          </div> */}
          <button className="button" onClick={this.addPlayer}>Add Player</button>
        </div>
        <input className="button is large" type="button" onClick={this.submitAllPlayers} value="PLAY" />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    players: state.players || {}
  }
}

export default connect(mapStateToProps)(Players)
