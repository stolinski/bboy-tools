import _ from 'lodash';
import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class App extends TrackerReact(React.Component) {
  constructor() {
    super();

    this.state = {
      subscription: {
        moves: Meteor.subscribe('moves'),
      },
    };
  }

  componentWillUnmount() {
    this.state.subscription.moves.stop();
  }

    // Loads items from the Moves collection and puts them on this.data.moves
  getMeteorData() {
    return {
            // moves: Moves.find({}, {sort: {createdAt: 1}}).fetch(),
      currentUser: Meteor.user(),
    };
  }

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
    _.each(start, (type) => {
      type._id = Random.id();
    });
    const copy = start.slice();

        // Merge Two Arrays of objects
    function mergeByProperty(arr1, arr2, prop) {
      _.each(arr2, (arr2obj) => {
        const arr1obj = _.find(arr1, (arr1obj) => {
          return arr1obj[prop] === arr2obj[prop];
        });
        arr1obj ? start.push(arr2obj) : arr1.push(arr2obj);
      });
    }

    const moves = Moves.find({}, { sort: { createdAt: 1 } }).fetch();

    mergeByProperty(start, moves, 'type');


        // Get moves from this.data.moves
    return _.map(copy, (type, index) => {
      const movez = _.filter(start, (n) => {
        return n.type === type.type;
      });
      return <Type key={type._id} type={type} moves={movez} />;
    });
  }

  render() {
    return (
      <div className="container">
        <ReactCSSTransitionGroup transitionName="pagetrans" transitionAppear>
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
