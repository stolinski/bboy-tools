import React, { Component } from "react";
import FlipMove from "react-flip-move";
import { graphql, compose } from "react-apollo";
import gql from "graphql-tag";

import UserMoves from "../moves/containers/UserMoves.graphql";
import BattleModeMove from "./BattleModeMove";

export class BattleMode extends Component {
  resetBattleMode = () => {
    this.props.resetBattleMode();
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

const resetBattleMode = gql`
  mutation resetBattleMode {
    resetBattleMode {
      _id
    }
  }
`;

export default compose(
  graphql(UserMoves, {
    props: ({ data }) => ({ ...data })
  }),
  graphql(resetBattleMode, {
    name: "resetBattleMode",
    options: {
      refetchQueries: ["UserMoves"]
    }
  })
)(BattleMode);
