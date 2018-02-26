import React, { Component } from "react";
import Hammer from "react-hammerjs";
import { graphql, compose } from "react-apollo";
import gql from "graphql-tag";

export class BattleModeMove extends Component {
  state = {
    xpos: 0
  };

  useMove() {
    this.props.useBattleMode({
      variables: {
        id: this.props.move._id
      }
    });
  }

  render() {
    return (
      <Hammer
        onPan={e => {
          console.log("pan", e);
          if (e.deltaX < 0 && e.deltaY > -40) {
            this.setState({
              trans: false,
              xpos: e.deltaX
            });
          }
        }}
        onPanStart={() => console.log("panstarts")}
        onPanCancel={() => console.log("cancel")}
        onPanEnd={e => {
          console.log(e);
          const posX = e.deltaX;
          if (posX < -150) {
            this.useMove();
          } else {
            this.setState(
              {
                trans: true
              },
              () => {
                this.setState({
                  xpos: 0
                });
              }
            );
          }
        }}
      >
        <li
          className={`bmove-move ${this.state.trans ? "trans" : ""}`}
          style={{ transform: `translateX(${this.state.xpos}px)` }}
        >
          <span className="text">
            {this.props.move.name}
            {this.props.move.value && (
              <span className="move-value">{this.props.move.value}</span>
            )}
          </span>
          <button className="use-move" onClick={this.useMove.bind(this)}>
            Use Move
          </button>
        </li>
      </Hammer>
    );
  }
}

const useBattleMode = gql`
  mutation useBattleMode($id: ID!) {
    useBattleMode(id: $id) {
      _id
    }
  }
`;

export default graphql(useBattleMode, {
  name: "useBattleMode",
  options: {
    refetchQueries: ["UserMoves"]
  }
})(BattleModeMove);
