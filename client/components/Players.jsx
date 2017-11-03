import React from 'react'
import {connect} from 'react-redux'
import {addAllPlayers} from '../actions/players'
const icons = [
  '/images/braveheart.png',
  '/images/hunter.png',
  '/images/kruger.png',
  '/images/runlolarun.png',
  '/images/space.png',
  '/images/darthvader.png'

]

class Players extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      // players: [{icon: 'icon1', name: 'Bob'}, {icon: null, name: 'Harrison'}]
      players: [],
      pendingPlayer: {id: null, icon: null, name: ''},
      // icon: null,
      dropdownActive: false
    }
    this.addPlayer = this.addPlayer.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.submitAllPlayers = this.submitAllPlayers.bind(this)
    this.toggleDropDown = this.toggleDropDown.bind(this)
    this.selectIcon = this.selectIcon.bind(this)
  }
  selectIcon (icon) {
    // const icon = evt.target.src
    const {pendingPlayer} = this.state
    pendingPlayer.icon = icon
    this.setState({pendingPlayer})
  }
  // selectPlayer (){

  // }
  handleChange (evt) {
    const {pendingPlayer} = this.state
    pendingPlayer[evt.target.name] = evt.target.value
    this.setState({pendingPlayer})
  }
  addPlayer (evt) {
    let {players, pendingPlayer} = this.state
    players.push(pendingPlayer)
    pendingPlayer = {id: null, icon: null, name: ''}
    this.setState({players, pendingPlayer})
  }
  toggleDropDown (dropdownActive) {
    this.setState({dropdownActive})
  }
  submitAllPlayers (e) {
    e.preventDefault()
    const playersWithId = this.state.players.map((player, i) => {
      const newPlayer = Object.assign({}, player)
      newPlayer.id = i + 1

      return newPlayer
    })
    window.localStorage.setItem('players', JSON.stringify(playersWithId))
    this.props.dispatch(addAllPlayers(playersWithId))
    this.props.history.push('/round')
  }

  render () {
    const {players, pendingPlayer} = this.state
    const PlayerReady = ({player}) => <div className="box column is-6 has-text-centered">
      <p className="title is-3">{player.name || 'Now Enter Your Name'} </p>
      <img className="image" style={{ margin: 'auto' }} src={player.icon} />
    </div>

    return (
      <div>
        <div className="columns is-multiline">
          {players.map((player, i) => <PlayerReady key={i} player={player} />)}
          <div className="box column is-6 has-text-centered">
            <div>
              <p className="title is-3">{pendingPlayer.name || 'Now Enter Your Name'} </p>
              <img className="image" style={{ margin: 'auto' }} src={pendingPlayer.icon} />
            </div>
            <field className="field has-icons-right">
              <input autoComplete="off" className="input" type="text" name="name" placeholder="Add Player Name..." value={pendingPlayer.name} onChange={this.handleChange} />
            </field>
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
                <div className="dropdown-menu" id="dropdown-menu" role="menu" >
                  <div className="dropdown-content" name="name" >
                    {icons.filter(icon => !players.find(player => player.icon === icon)).map(image => <a className="dropdown-item" key={image}><img onClick={() => this.selectIcon(image)} src={image} /></a>)}
                  </div>
                </div>
              </div>
              <button className="button" onClick={this.addPlayer}>Add Player</button>
            </div>
          </div>
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
