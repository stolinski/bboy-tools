import React, {Component} from 'react';

export default class BattleModeMove extends Component {

    useMove() {
        Meteor.call('move.battleuse', this.props.move._id, this.props.move.battleUsed, (error) => {
            if (error) {
                sAlert.error(error.reason);
            }
        });
    }

    render() {
        // Give moves a different className when they are checked off,
        // so that we can style them nicely in CSS
        var moveClassName = this.props.move.checked ? 'checked' : '';
        moveClassName += ' move';
        moveClassName += ' battle-mode';
        moveClassName += this.props.move.battleUsed ? ' battle-used' : '';

        const MOVE_VALUE = this.props.move.value ? <span className='move-value'>{this.props.move.value}</span> : '';
        return (
            <li className={moveClassName}>
                <span className='text'>
                    {this.props.move.name}
                    {MOVE_VALUE}
                </span>
                <button className='btn btn-cancel use-move'
                    onClick={(this.useMove.bind(this))}>Use Move</button>
            </li>
        );
    }
}
