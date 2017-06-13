import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { withData } from 'meteor/orionsoft:react-meteor-data';
import _ from 'lodash';

import Type from './Type';

@withData(() => {
  const movesSub = Meteor.subscribe('moves');
  return {
    movesSub: movesSub.ready(),
    moves: Moves.find({}, { sort: { createdAt: 1 } }).fetch(),
  };
})
export default class MyMoves extends Component {

  renderMoves() {
    const start = [
      {
        type: 'top_rock',
      }, {
        type: 'go_down',
      }, {
        type: 'footwork',
      }, {
        type: 'power_move',
      }, {
        type: 'freeze',
      }, {
        type: 'burner',
      },
    ];
    start.forEach((type) => {
      type._id = Random.id();
    });
    const copy = start.slice();

    // Merge Two Arrays of objects
    function mergeByProperty(arr1, arr2, prop) {
      arr2.forEach((arr2obj) => {
        const arr1obj = _.find(arr1, arr1obj => arr1obj[prop] === arr2obj[prop]);
        arr1obj ? start.push(arr2obj) : arr1.push(arr2obj);
      });
    }

    const moves = this.props.moves;

    mergeByProperty(start, moves, 'type');

    // Get moves from this.data.moves
    return copy.map((type) => {
      const movez = start.filter(n => n.type === type.type);
      return <Type key={type._id} type={type} moves={movez} />;
    });
  }

  render() {
    return (
      <div className="container">
        <ReactCSSTransitionGroup
          transitionAppearTimeout={500}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
          transitionName="pagetrans"
          transitionAppear
        >
          <div className="types" key="1">
            <h1>My Moves</h1>
            <div className="types-wrapper">
              {this.renderMoves()}
            </div>
          </div>
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}
