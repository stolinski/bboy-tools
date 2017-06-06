import React, { PureComponent, PropTypes } from 'react';
import { autobind } from 'core-decorators';

@autobind
export default class Move extends PureComponent {

  static defaultProps = {
    bMode: false,
  }

  static propTypes = {
    move: PropTypes.object.isRequired,
    bMode: PropTypes.bool,
  }

  state = {
    controlsToggle: false,
  }

  toggleControls() {
    this.setState({
      controlsToggle: !this.state.controlsToggle,
    });
  }

  deleteThisMove() {
    Moves.remove(this.props.move._id);
  }

  render() {
    // Give moves a different className when they are checked off,
    // so that we can style them nicely in CSS
    let moveClassName = this.props.move.checked ? 'checked' : '';
    moveClassName += ' move';
    let controlsToggle = this.state.controlsToggle ? 'open' : '';
    controlsToggle += ' controls';

    const moveEditForm = (
      <form className="edit-move" onSubmit={this.updateMove} >
        <input
          type="text"
          ref="moveName"
          placeholder="Move Name"
        />
        <input
          type="number"
          ref="moveValue"
          min="0"
          max="10"
          placeholder="10"
        />
        <input
          type="hidden"
          ref="moveType"
        />
        <button type="submit">
          <i className="fa fa-check" />
        </button>
      </form>
    );
    return (
      <li className={moveClassName}>
        <div className={controlsToggle}>
          <button className="delete btn" onClick={this.deleteThisMove}>
            &times;
          </button>
        </div>
        <span className="text">{this.props.move.name}
          {this.props.move.value && <span className="move-value">{this.props.move.value}</span>}
        </span>
        {moveEditForm}
        <span className="edit-toggle" onClick={this.toggleControls}><i className="fa fa-pencil" /></span>
      </li>
    );
  }
}
