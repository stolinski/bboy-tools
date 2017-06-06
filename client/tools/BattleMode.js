import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import FlipMove from 'react-flip-move';
import { withData } from 'meteor/orionsoft:react-meteor-data';

import BattleModeMove from './BattleModeMove';

@withData(() => {
  const movesSub = Meteor.subscribe('moves');
  return {
    movesSub: movesSub.ready(),
    moves: Moves.find({}, { sort: { createdAt: 1 } }).fetch(),
  };
})
export default class BattleMode extends Component {

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
        <div className="types types-battle-mode">
          <h1>Battle Mode</h1>
          <button className="btn btn-reset" onClick={this.resetBattleMode}>Reset</button>
          <ul className="bmoves">
            <FlipMove
              enterAnimation="accordionVertical"
              leaveAnimation="accordionVertical"
            >
              {this.props.moves
                .filter(move => !move.battleUsed)
                .map(move => <BattleModeMove key={move._id} move={move} />)
              }
            </FlipMove>
          </ul>
        </div>
      </div>
    );
  }
}
