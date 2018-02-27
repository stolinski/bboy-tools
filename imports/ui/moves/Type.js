import React, { PureComponent } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import startCase from "lodash/startCase";
import kebabCase from "lodash/kebabCase";

import Move from "./Move";
import MoveForm from "./MoveForm";

export default class Type extends PureComponent {
  static propTypes = {
    type: PropTypes.string.isRequired,
    moves: PropTypes.array.isRequired
  };

  state = {
    formToggle: false
  };

  openForm = () => {
    this.setState({ formToggle: !this.state.formToggle });
  };

  handleSubmit = event => {
    event.preventDefault();
    const name = this.name.value.trim();
    const value = this.value.value.trim();
    const { type } = this.props;
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

    this.name.value = "";
    this.value.value = "";
  };

  render() {
    const { type, moves } = this.props;
    let toggleForm = this.state.formToggle ? "open" : "";
    toggleForm += " add-new-move";

    return (
      <div className={`${kebabCase(type)} type`}>
        <h3>{startCase(type)}</h3>

        <ul className="moves">
          <ReactCSSTransitionGroup
            transitionEnterTimeout={750}
            transitionLeaveTimeout={750}
            transitionName="newmove"
          >
            {moves.map(move => (
              <Move key={move._id} move={move} bMode={false} />
            ))}
          </ReactCSSTransitionGroup>
          <MoveForm />
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
