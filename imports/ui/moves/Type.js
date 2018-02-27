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
          <MoveForm type={type} />
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
