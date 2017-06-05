import React from 'react';

const controlsToggle = 'controls';
Move = React.createClass({
  getDefaultProps() {
    return {
      bMode: false,
    };
  },

  propTypes: {
    move: React.PropTypes.object.isRequired,
    bMode: React.PropTypes.bool,
  },

  getInitialState() {
    const current = FlowRouter.current();
    return {
      controlsToggle: false,
    };
  },

  toggleControls() {
    this.setState({
      controlsToggle: !this.state.controlsToggle,
    });
  },

  useMove() {
    Meteor.call('move.battleuse', this.props.move._id, this.props.move.battleUsed, (error) => {
      if (error) {
        sAlert.error(error.reason);
      }
    });
  },

  deleteThisMove() {
    Moves.remove(this.props.move._id);
  },

  battle() {
    return this.props.bMode ? 'BATTLE' : 'Nope';
  },

  render() {
        // Give moves a different className when they are checked off,
        // so that we can style them nicely in CSS
    let moveClassName = this.props.move.checked ? 'checked' : '';
    moveClassName += ' move';
    moveClassName += this.props.bMode ? ' battle-mode' : '';
    moveClassName += this.props.move.battleUsed ? ' battle-used' : '';
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

    let modeControls;

    const MOVE_VALUE = this.props.move.value ? <span className="move-value">{this.props.move.value}</span> : '';

    if (this.props.bMode) {
      modeControls = (
        <button
          className="btn btn-cancel use-move"
          onClick={(this.useMove)}
        >Use Move</button>
            );
    } else {
      modeControls = (
        <span className="edit-toggle" onClick={this.toggleControls}><i className="fa fa-pencil" /></span>
            );
    }

    return (
      <li className={moveClassName}>
        <div className={controlsToggle}>
          <button className="delete btn" onClick={this.deleteThisMove}>
                        &times;
                    </button>
        </div>
        <span className="text">{this.props.move.name}
          {MOVE_VALUE}
        </span>
        {moveEditForm}
        {modeControls} {/* If battle mode page, show battle mode toggle*/}
      </li>
    );
  },
});
