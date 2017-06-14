import React, { Component } from 'react';
import Hammer from 'react-hammerjs';

export default class BattleModeMove extends Component {

  state = {
    xpos: 0,
  }

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
      <Hammer
        onPan={(e) => {
          if (e.deltaX < 0) {
            this.setState({
              xpos: e.deltaX,
            });
          }
        }}
        onPanCancel={() => console.log('cancel')}
        onPanEnd={(e) => {
          console.log(e);
          const posX = e.deltaX;
          if (posX < -150) {
            this.useMove();
          } else {
            this.setState({
              xpos: 0,
            });
          }
        }}
      >
        <li
          className={`bmove-move ${this.state.trans ? 'trans' : ''}`}
          style={{ transform: `translateX(${this.state.xpos}px)` }}
        >
          <span className="text">
            {this.props.move.name}
            {this.props.move.value && <span className="move-value">{this.props.move.value}</span>}
          </span>
          <button
            className="use-move"
            onClick={this.useMove.bind(this)}
          >
          Use Move
        </button>
        </li>
      </Hammer>
    );
  }
}
