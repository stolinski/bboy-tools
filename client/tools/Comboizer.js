import React, {
  Component,
  PropTypes,
} from 'react';
import { autobind } from 'core-decorators';
import { withData } from 'meteor/orionsoft:react-meteor-data';

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
  }

  getMoves() {
    const filters = [
      { status: this.state.top_rock, type: 'top_rock' },
      { status: this.state.go_down, type: 'go_down' },
      { status: this.state.power_move, type: 'power_move' },
      { status: this.state.footwork, type: 'footwork' },
      { status: this.state.freeze, type: 'freeze' },
      { status: this.state.burner, type: 'burner' },
    ].filter(value => value.status).map(filter => filter.type);

    const moves = this.props.moves.filter((move) => {
      return filters.indexOf(move.type) > -1;
    });

    const { rand1, rand2 } = getRandTwo(moves.length);

    this.setState({
      randomMoves: [
        moves[rand1],
        moves[rand2],
      ],
    });
  }

  render() {
    if (!this.props.moves) {
      return null;
    }
    return (
      <div className="comboizer practice-tools types">
        <h1>Comboizer</h1>
        <div>
          <label>
            Top Rock
            <input
              type="checkbox"
              checked={this.state.top_rock}
              onClick={() => this.setState({ top_rock: !this.state.top_rock })}
            />
          </label>
          <label>
            Go Down
            <input
              type="checkbox"
              checked={this.state.go_down}
              onClick={() => this.setState({ go_down: !this.state.go_down })}
            />
          </label>
          <label>
            Footwork
            <input
              type="checkbox"
              checked={this.state.footwork}
              onClick={() => this.setState({ footwork: !this.state.footwork })}
            />
          </label>
          <label>
            Freeze
            <input
              type="checkbox"
              onClick={() => this.setState({ freeze: !this.state.freeze })}
              checked={this.state.freeze}
            />
          </label>
          <label>
            Power
            <input
              type="checkbox"
              checked={this.state.power_move}
              onClick={() => this.setState({ power_move: !this.state.power_move })}
            />
          </label>
          <label>
            Burners
            <input
              type="checkbox"
              checked={this.state.burner}
              onClick={() => this.setState({ burner: !this.state.burner })}
            />
          </label>
        </div>
        {this.state.randomMoves.length > 0 && <h3>{this.state.randomMoves[0].name}</h3>}
        {this.state.randomMoves.length > 0 && <h3>{this.state.randomMoves[1].name}</h3>}
        <button className="btn" onClick={this.getMoves}>Get Moves</button>
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
