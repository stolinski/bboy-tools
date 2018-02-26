import React, { Component } from "react";
import FlipMove from "react-flip-move";
import { graphql } from "react-apollo";
import UserMoves from "../moves/containers/UserMoves.graphql";
import BattleModeMove from "./BattleModeMove";

export class BattleMode extends Component {
  resetBattleMode = () => {
    Meteor.call("move.resetBattle", Meteor.userId(), error => {
      if (error) {
        sAlert.error(error.reason);
      }
    });
  };

  render() {
    const { moves, loading } = this.props;
    if (loading) return null;
    return (
      <div className="container">
        <div className="types types-battle-mode">
          <h1>Battle Mode</h1>
          <button className="btn btn-reset" onClick={this.resetBattleMode}>
            Reset
          </button>
          <ul className="bmoves">
            <FlipMove
              enterAnimation="accordionVertical"
              leaveAnimation="accordionVertical"
            >
              {this.props.moves
                .filter(move => !move.battleUsed)
                .map(move => <BattleModeMove key={move._id} move={move} />)}
            </FlipMove>
          </ul>
        </div>
      </div>
    );
  }
}

export default graphql(UserMoves, {
  props: ({ data }) => ({ ...data })
})(BattleMode);
