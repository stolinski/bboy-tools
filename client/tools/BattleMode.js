import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import BattleModeMove from '../moves/BattleModeMove';
import { withData } from 'meteor/orionsoft:react-meteor-data';

@withData(() => {
  const movesSub = Meteor.subscribe('moves');
  return {
    movesSub: movesSub.ready(),
    moves: Moves.find({}, { sort: { createdAt: 1 } }).fetch(),

  };
})
export default class BattleMode extends Component {
  renderMoves() {
    const moves = this.props.moves;
    return moves.map(move => <BattleModeMove key={move._id} move={move} />);
  }

  resetBattleMode() {
    Meteor.call('move.resetBattle', Meteor.userId(), (error) => {
      if (error) {
        sAlert.error(error.reason);
      }
    });
  }

  render() {
    return (
      <div className="container">
        <ReactCSSTransitionGroup transitionName="pagetrans" transitionAppear>
          <div className="types types-battle-mode" key="2">
            <h1>Battle Mode</h1>
            <button className="btn btn-reset" onClick={this.resetBattleMode}>Reset</button>
            <ul className="bmoves">
              {this.renderMoves()}
            </ul>
          </div>
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}
