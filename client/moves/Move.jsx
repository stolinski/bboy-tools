var controlsToggle = 'controls';
// Move component - represents a single todo item
Move = React.createClass({
  getDefaultProps: function() {
    return {
      bMode: false
    };
  },

  propTypes: {
    move: React.PropTypes.object.isRequired,
    bMode: React.PropTypes.bool
  },
 
  getInitialState() {
    let current = FlowRouter.current();
    return {
      controlsToggle: false
    }
  },

  toggleControls() {
    this.setState({
      controlsToggle: !this.state.controlsToggle
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
    var moveClassName = this.props.move.checked ? "checked" : "";
    moveClassName += ' move';
    moveClassName += this.props.bMode ? ' battle-mode' : '';
    moveClassName += this.props.move.battleUsed ? ' battle-used' : '';
    var controlsToggle = this.state.controlsToggle ? 'open' : "";
    controlsToggle += ' controls';

    var moveEditForm = (
        <form className="edit-move" onSubmit={this.updateMove} >
          <input
            type="text"
            ref="moveName"
            placeholder="Move Name" />
          <input
            type="number"
            ref="moveValue"
            min="0"
            max="10"
            placeholder="Value" />
          <input
            type="hidden"
            ref="moveType"/>
          <button type="submit">
            <i className="fa fa-check"></i>
          </button>
        </form>
    )

    var modeControls;
    if (this.props.bMode) {
        modeControls = (
            <button className="btn btn-cancel use-move"
                    onClick={(this.useMove)}>Use Move</button>
        )
    } else {
        modeControls = (
            <span className="edit-toggle" onClick={this.toggleControls}><i className="fa fa-pencil"></i></span>
        )        
    }

    return (
      <li className={moveClassName}>
        <div className={controlsToggle}>
        <button className="delete btn" onClick={this.deleteThisMove}>
          &times;
        </button>
        </div> 
        <span className="text">{this.props.move.name}<span className="move-value">{this.props.move.value}</span></span>
        {moveEditForm}
        {modeControls} {/*If battle mode page, show battle mode toggle*/}
      </li>
    );
  }
});