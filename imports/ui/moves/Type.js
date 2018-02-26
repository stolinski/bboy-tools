import startCase from "lodash/startCase";
import kebabCase from "lodash/kebabCase";
import ReactDOM from "react-dom";
import gql from "graphql-tag";
import { graphql, compose } from "react-apollo";

import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import Move from "./Move";

const addMove = gql`
  mutation addMove($move: MoveInput!) {
    addMove(move: $move) {
      _id
    }
  }
`;

export class Type extends PureComponent {
  static propTypes = {
    type: PropTypes.object.isRequired,
    moves: PropTypes.array.isRequired
  };

  state = {
    formToggle: false
  };

  renderCategory = () => {
    return startCase(this.props.type.type);
  };

  renderCategorySnake = () => {
    return this.props.type.type;
  };

  typeClasses = () => {
    return `${kebabCase(this.props.type.type)} type`;
  };

  openForm = () => {
    this.setState({ formToggle: !this.state.formToggle });
  };

  renderTypes() {
    if (typeof this.props.moves[0] !== "undefined") {
      if (this.props.moves[0].name === undefined) {
        this.props.moves.shift();
      }
    }
    return this.props.moves.map(move => (
      <Move key={move._id} move={move} bMode={false} />
    ));
  }

  handleSubmit = event => {
    event.preventDefault();

    // Find the text field via the React ref
    const name = this.name.value.trim();
    const value = this.value.value.trim();
    const type = this.props.type.type;
    const move = {
      name,
      value,
      type
    };

    this.props.addMove({
      variables: {
        move
      }
    });

    // Clear form
    this.name.value = "";
    this.value.value = "";
  };

  render() {
    let toggleForm = this.state.formToggle ? "open" : "";
    toggleForm += " add-new-move";

    return (
      <div className={this.typeClasses()}>
        <h3>{this.renderCategory()}</h3>

        <ul className="moves">
          <ReactCSSTransitionGroup
            transitionEnterTimeout={750}
            transitionLeaveTimeout={750}
            transitionName="newmove"
          >
            {this.renderTypes()}
          </ReactCSSTransitionGroup>

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
        </ul>

        <button className={toggleForm} onClick={this.openForm}>
          <span className="form-toggle-icons">
            <i className="fa fa-plus" />
            <i className="fa fa-minus" />
          </span>
          <span className="form-toggle-text">New Move</span>
        </button>
      </div>
    );
  }
}

export default graphql(addMove, {
  name: "addMove",
  options: {
    refetchQueries: ["UserMoves"]
  }
})(Type);
