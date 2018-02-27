import React, { Component } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { graphql } from "react-apollo";
import UserMoves from "./containers/UserMoves.graphql";
import Moves from "imports/api/moves/moves";

import Type from "./Type";

export class MyMoves extends Component {
  types = ["top_rock", "go_down", "footwork", "power_move", "freeze", "burner"];

  render() {
    const { moves, loading } = this.props;
    if (loading) return null;
    return (
      <div className="container">
        <ReactCSSTransitionGroup
          transitionAppearTimeout={500}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
          transitionName="pagetrans"
          transitionAppear
        >
          <div className="types paper" key="1">
            <h1>My Moves</h1>
            <div className="types-wrapper">
              {this.types.map(type => {
                const movez = moves.filter(move => move.type === type);
                return <Type key={type} type={type} moves={movez} />;
              })}
            </div>
          </div>
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default graphql(UserMoves, {
  props: ({ data }) => ({ ...data })
})(MyMoves);
