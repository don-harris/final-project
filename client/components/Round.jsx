import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Round extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: props.players,
      currentPlayer: [],
      remainingPlayers: []
    };
    this.nextPlayer = this.nextPlayer.bind(this);
  }

  componentWillMount() {
    const { players, currentPlayer, remainingPlayers } = this.state;
    // set currentPlayer as first index of players in order to get working - will mathRand
    console.log("This is players pre-transform: ", players);
    currentPlayer = players[0];
    // set remainingPlayers by filtering out players for currentPlayer
    console.log("This is currentPlayer post-transform: ", currentPlayer);
    remainingPlayers = players.filter(players => {});
    console.log("This is remainingPlayers post-transform: ", remainingPlayers);

    this.setState({ currentPlayer, remainingPlayers });
  }

  nextPlayer() {
    const { players, currentPlayer, remainingPlayers } = this.state;
    // mathRand over remaining players to get next player & set currentPlayer to this.

    // update remainingPlayers to filter out currentPlayer.

    // when remainingPlayers is === [], route to leaderboard page.
  }

  render() {
    const { players, currentPlayer } = this.state;

    return (
      <div>
        <h1>Round Page</h1>
        <h1>{currentPlayer}</h1>
        <Link to="/leaderboard">
          <button className="button is large" onClick={this.nextPlayer}>
            Continue
          </button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    players: state.players
  };
};

export default connect(mapStateToProps)(Round);
