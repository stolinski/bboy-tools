import React, { Component } from 'react';

export default class BattleModeMove extends Component {

  useMove() {
    console.log('battle move');
    Meteor.call('move.battleuse', this.props.move._id, this.props.move.battleUsed, (error) => {
      if (error) {
        sAlert.error(error.reason);
      }
    });
  }

  render() {
    return (
      <li className="battle-mode move">
        <span className="text">
          {this.props.move.name}
          {this.props.move.value && <span className="move-value">{this.props.move.value}</span>}
        </span>
        <button
          className="btn btn-cancel use-move"
          onClick={this.useMove.bind(this)}
        >
          Use Move
        </button>
      </li>
    );
  }
}
