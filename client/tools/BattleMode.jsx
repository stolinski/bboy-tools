_ = lodash
import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class BattleMode extends TrackerReact(React.Component) {
    constructor() {
        super();

        this.state = {
            subscription: {
                moves: Meteor.subscribe('moves')
            }
        }
    }

    componentWillUnmount() {
        this.state.subscription.moves.stop();
    }

    renderMoves() {
        let moves = Moves.find({}, {sort: {createdAt: 1}}).fetch();
        return moves.map((move) => {
            return <Move key={move._id} move={move} bMode={true} />
        });
    }


    resetBattleMode() {
        Meteor.call('move.resetBattle', Meteor.userId(), (error) => {
            if (error) {
                sAlert.error(error.reason);
            }
        });
    }

    render() {
        return (
            <div className='container'>
                <ReactCSSTransitionGroup transitionName='pagetrans' transitionAppear={true}>
                    <div className='types types-battle-mode' key='2'>
                        <h1>Battle Mode</h1>
                        <button className='btn btn-reset' onClick={this.resetBattleMode}>Reset</button>
                        <ul className='moves'>
                            {this.renderMoves()}
                        </ul>
                    </div>
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}
