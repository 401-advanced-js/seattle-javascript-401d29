import React from "react";
import { connect } from "react-redux";

import Player from "./player.js";

import * as actions from "../store/players-actions.js";

class App extends React.Component {
  getPlayer = id => {
    this.props.handleGet(id);
  };
  deletePlayer = id => {
    this.props.handleDelete(id);
  };
  render() {
    return (
      <div>
        <h2>Players</h2>
        <ul>
          {this.props.players.record.map((player, idx) => (
            <li key={idx}>
              {player.name}
              <button onClick={() => this.getPlayer(idx)}>Get</button>
              <button onClick={() => this.deletePlayer(idx)}>Delete</button>
            </li>
          ))}
        </ul>
        <br />
        <h4>Active Player:{this.props.players.activeRecord.name}</h4>

        <Player />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  players: state.players
});

const mapDispatchToProps = (dispatch, getState) => ({
  handleGet: id => dispatch(actions.get(id)),
  handleDelete: id => dispatch(actions.destroy(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
