import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Header from "./Header";
import Podium from "./Podium"

import { endRound, resetGame } from '../actions/round'

class Leaderboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleModalButton = this.handleModalButton.bind(this);
    this.endGame = this.endGame.bind(this);
    this.calcTotal = this.calcTotal.bind(this);
    this.toggleModal = this.toggleModal.bind(this)
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  componentDidMount() {
    const { dispatch, round } = this.props;
    dispatch(endRound(round));
  }

  handleClick() {
    const { game, history } = this.props;
    game.length < 3 ? history.push("/round") : this.endGame();
  }

  endGame() {
    this.toggleModal()
  }

  handleModalButton () {
    const { dispatch, history } = this.props
    dispatch(resetGame())
    history.push("/")
  }

  calcTotal(rounds) {
    console.log("This is rounds.length", rounds.length);
    // const total = rounds.reduce((accumulator, ) => {
    //   accumulator + currentValue;
    // });
    if (rounds.length === 3) {
      return rounds[0] + rounds[1] + rounds[2];
    } else if (rounds.length === 2) {
      return rounds[0] + rounds[1];
    } else {
      return rounds[0];
    }
    console.log(total);
  }

  render() {
    this.props.players.sort((a, b) => {
      const aTotal = this.calcTotal(a.rounds);
      const bTotal = this.calcTotal(b.rounds);
      const total = 0;
      if (aTotal > bTotal) return -1;
      if (aTotal < bTotal) return 1;
    });

    return <div className="container">
        <Header />
        <h1 className="leadertitle title is-1">
          And the nominations are...
        </h1>
        <table className="table is-bordered is-fullwidth is-striped">
          <thead className="thead">
            <tr className="tr">
              <th className="th has-text-centered">Position</th>
              <th className="th has-text-centered">Icon</th>
              <th className="th has-text-centered">Player Name</th>
              <th className="th has-text-centered">Round 1</th>
              <th className="th has-text-centered">Round 2</th>
              <th className="th has-text-centered">Round 3</th>
              <th className="th has-text-centered">Total</th>
            </tr>
          </thead>
          <tbody className="tbody">
            {this.props.players.map((player, i) => {
              return <tr className="tr" key={player.id}>
                  <th className="th has-text-centered">{i + 1}</th>
                  <th className="th has-text-centered">
                    <img src={player.icon} />
                  </th>
                  <th className="th has-text-centered">{player.name} </th>
                  <th className="th has-text-centered">
                    {player.rounds[0]}
                  </th>
                  <th className="th has-text-centered">
                    {player.rounds[1]}
                  </th>
                  <th className="th has-text-centered">
                    {player.rounds[2]}
                  </th>
                  <th className="th has-text-centered">
                    {this.calcTotal(player.rounds)}
                  </th>
                </tr>;
            })}
          </tbody>
        </table>
        <hr />
        <button className="button is-large is-danger" onClick={this.handleClick}>
          <strong>Continue</strong>
        </button>

        <Podium show={this.state.isOpen} onClose={this.toggleModal}>
          <div className="">
            <div>
              <h1 className="titlefont3 is-1">And the Oscar goes to...</h1>
              <hr />
            </div>

            <div className="podiumplayers columns">
              {/* Column #1 - second place */}
              <div className="column">
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-content">
                        <figure className="image is-128x128">
                          <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
                        </figure>
                      </div>
                      <div className="media-content">
                        <p className="title is-4">John Smith</p>
                        <p className="subtitle is-6">@johnsmith</p>
                      </div>
                    </div>

                    {/* <div className="content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                      <a href="#">#css</a> <a href="#">#responsive</a>
                      <br />
                    </div> */}
                  </div>
                </div>
              </div>

              {/* Column #2 - first place */}
              <div className="column">
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-left">
                        <figure className="image is-128x128">
                          <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
                        </figure>
                      </div>
                      <div className="media-content">
                        <p className="title is-4">John Smith</p>
                        <p className="subtitle is-6">@johnsmith</p>
                      </div>
                    </div>

                    {/* <div className="content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                      <a href="#">#css</a> <a href="#">#responsive</a>
                      <br />
                    </div> */}
                  </div>
                </div>
              </div>

              {/* Column #3 - third place */}
              <div className="column">
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-left">
                        <figure className="image is-128x128">
                          <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
                        </figure>
                      </div>
                      <div className="media-content">
                        <p className="title is-4">John Smith</p>
                        <p className="subtitle is-6">@johnsmith</p>
                      </div>
                    </div>

                    {/* <div className="content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                      <a href="#">#css</a> <a href="#">#responsive</a>
                      <br />
                    </div> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="podiumbox">
              <image src="../../server/public/images/11.jpg" />
            </div>

            <hr />
            <button className="button is-centered is-danger" onClick={this.handleModalButton}>
              Play it again Sam...
            </button>
          </div>
        </Podium>
      </div>;
  }
}

function mapStateToProps (state) {
  return {
    players: makeLeaderBoard(state.playerScores),
    round: state.round,
    game: state.game
  }
}

function makeLeaderBoard (scores) {
  const players = []
  scores.forEach(score => {
    const foundPlayer = players.find(player => player.id === score.id)
    if (foundPlayer) {
      foundPlayer.rounds.push(score.score)
    } else {
      const playerEdit = Object.assign({}, foundPlayer)
      playerEdit.id = score.id
      playerEdit.name = score.name
      playerEdit.icon = score.icon
      playerEdit.rounds = [score.score]
      return players.push(playerEdit)
    }
  })
  console.log('this is players: ', players)
  return players
}

export default connect(mapStateToProps)(Leaderboard)
