import startCase from 'lodash/startCase';
import kebabCase from 'lodash/kebabCase';
import ReactDOM from 'react-dom';

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { autobind } from 'core-decorators';

import Move from './Move';

@autobind
export default class Type extends PureComponent {
  static propTypes = {
    type: PropTypes.object.isRequired,
    moves: PropTypes.array.isRequired,
  };

  state = {
    formToggle: false,
  };

  renderCategory() {
    return startCase(this.props.type.type);
  }

  renderCategorySnake() {
    return this.props.type.type;
  }

  typeClasses() {
    return `${kebabCase(this.props.type.type)} type`;
  }

  openForm() {
    this.setState({ formToggle: !this.state.formToggle });
  }

  renderTypes() {
    if (typeof this.props.moves[0] !== 'undefined') {
      if (this.props.moves[0].name === undefined) {
        this.props.moves.shift();
      }
    }
    return this.props.moves.map(move => <Move key={move._id} move={move} bMode={false} />);
  }

  noTypes() {
    return <li className="no-results">No Moves Added Yet</li>;
  }

  handleSubmit(event) {
    event.preventDefault();

    // Find the text field via the React ref
    const name = ReactDOM.findDOMNode(this.refs.moveName).value.trim();
    const value = ReactDOM.findDOMNode(this.refs.moveValue).value.trim();
    const type = ReactDOM.findDOMNode(this.refs.moveType).value.trim();

    Meteor.call('move.add', name, value, type, Meteor.userId(), Meteor.user().username, (error) => {
      if (error) {
        sAlert.error(error.reason);
      }
    });

    // Clear form
    ReactDOM.findDOMNode(this.refs.moveName).value = '';
    ReactDOM.findDOMNode(this.refs.moveValue).value = '';
  }

  render() {
    let toggleForm = this.state.formToggle ? 'open' : '';
    toggleForm += ' add-new-move';

    return (
      <div className={this.typeClasses()}>
        <h3>{this.renderCategory()}</h3>

        <ul className="moves">
          <ReactCSSTransitionGroup transitionEnterTimeout={750} transitionLeaveTimeout={750} transitionName="newmove">
            {this.renderTypes()}
          </ReactCSSTransitionGroup>

          <li className="move-form">
            <form className="new-move" onSubmit={this.handleSubmit}>
              <input type="text" ref="moveName" placeholder="Move Name" />
              <input type="number" ref="moveValue" min="0" max="10" placeholder="10" />
              <input type="hidden" ref="moveType" value={this.renderCategorySnake()} />
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
