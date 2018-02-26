import React, { Component } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import _ from "lodash";
import { graphql } from "react-apollo";
import UserMoves from "./containers/UserMoves.graphql";
import Moves from "imports/api/moves/moves";

import Type from "./Type";

export class MyMoves extends Component {
  renderMoves() {
    const start = [
      {
        type: "top_rock"
      },
      {
        type: "go_down"
      },
      {
        type: "footwork"
      },
      {
        type: "power_move"
      },
      {
        type: "freeze"
      },
      {
        type: "burner"
      }
    ];
    start.forEach(type => {
      type._id = Random.id();
    });
    const copy = start.slice();

    // Merge Two Arrays of objects
    function mergeByProperty(arr1, arr2, prop) {
      arr2.forEach(arr2obj => {
        const arr1obj = _.find(
          arr1,
          arr1obj => arr1obj[prop] === arr2obj[prop]
        );
        arr1obj ? start.push(arr2obj) : arr1.push(arr2obj);
      });
    }

    const moves = this.props.moves;

    mergeByProperty(start, moves, "type");

    // Get moves from this.data.moves
    return copy.map(type => {
      const movez = start.filter(n => n.type === type.type);
      return <Type key={type._id} type={type} moves={movez} />;
    });
  }

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
            <div className="types-wrapper">{this.renderMoves()}</div>
          </div>
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default graphql(UserMoves, {
  props: ({ data }) => ({ ...data })
})(MyMoves);
