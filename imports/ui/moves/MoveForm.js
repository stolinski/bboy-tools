import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql, compose } from "react-apollo";

class MoveForm extends Component {
  render() {
    return (
      <li className="move-form">
        <form className="new-move" onSubmit={this.handleSubmit}>
          <input
            type="text"
            ref={input => (this.name = input)}
            placeholder="Move Name"
          />
          <input
            type="number"
            ref={input => (this.value = input)}
            min="0"
            max="10"
            placeholder="10"
          />
          <button type="submit">
            <i className="fa fa-check" />
          </button>
        </form>
      </li>
    );
  }
}

const addMove = gql`
  mutation addMove($move: MoveInput!) {
    addMove(move: $move) {
      _id
    }
  }
`;

export default graphql(addMove, {
  name: "addMove",
  options: {
    refetchQueries: ["UserMoves"]
  }
})(MoveForm);
