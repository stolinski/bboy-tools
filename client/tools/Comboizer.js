import React, { Component } from 'react';
import { autobind } from 'core-decorators';
import { withData } from 'meteor/orionsoft:react-meteor-data';
import startCase from 'lodash/startCase';
import PropTypes from 'prop-types';

@withData(() => {
  const movesSub = Meteor.subscribe('moves');
  const moves = Moves.find({}).fetch();
  return {
    movesSub: movesSub.ready(),
    moves: Moves.find({}).fetch(),
  };
})
@autobind
export default class Comboizer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomMoves: [],
      top_rock: false,
      go_down: true,
      power_move: true,
      footwork: true,
      freeze: true,
      burner: false,
    };
    this.filters = [
      { status: this.state.top_rock, type: 'top_rock' },
      { status: this.state.go_down, type: 'go_down' },
      { status: this.state.power_move, type: 'power_move' },
      { status: this.state.footwork, type: 'footwork' },
      { status: this.state.freeze, type: 'freeze' },
      { status: this.state.burner, type: 'burner' },
    ];
  }

  getMoves() {
    const filters = this.filters.filter(value => value.status).map(filter => filter.type);
    const moves = this.props.moves.filter(move => filters.indexOf(move.type) > -1);
    const { rand1, rand2 } = getRandTwo(moves.length);

    this.setState({
      randomMoves: [moves[rand1], moves[rand2]],
    });
  }

  render() {
    if (!this.props.moves) {
      return null;
    }
    return (
      <div className="comboizer practice-tools types">
        <h1>Comboizer</h1>
        <div className="comboizer-filters">
          {this.filters.map(filter => (
            <div className="comboizer-filter">
              <input
                type="checkbox"
                id={filter.type}
                checked={this.state[filter.type]}
                onClick={() => this.setState({ [filter.type]: !this.state[filter.type] })}
              />
              <label htmlFor={filter.type}>{startCase(filter.type)}</label>
            </div>
          ))}
        </div>
        {this.state.randomMoves.length > 0 && <h3>{this.state.randomMoves[0].name}</h3>}
        {this.state.randomMoves.length > 0 && <h3>{this.state.randomMoves[1].name}</h3>}
        <button className="btn" onClick={this.getMoves}>
          Get Moves
        </button>
      </div>
    );
  }
}

function getRandTwo(length) {
  // return two lengths
  const rand1 = getRand(length);
  let rand2 = getRand(length);
  while (rand1 === rand2) {
    rand2 = getRand(length);
  }
  return { rand1, rand2 };
}

function getRand(length) {
  return Math.floor(Math.random() * length);
}
