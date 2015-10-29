// Battle Mode Component
// A wrapper around individual moves
// 
// ** Funcs ** 
// Reset Battle-Mode - resetBattleMode
//
// ** Data **
// moves, currentUser
//
// ** Routes **
// /battle-mode
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

BattleMode = React.createClass({
  // This mixin makes the getMeteorData method work
  mixins: [ReactMeteorData],
 
  // Loads items from the Moves collection and puts them on this.data.moves
  getMeteorData() {
    return {
      moves: Moves.find({owner: Meteor.userId()}, {sort: {createdAt: 1}}).fetch(),
      currentUser: Meteor.user()
    }
  },

  renderMoves(){
    return this.data.moves.map((move) => {
      return <Move key={move._id} move={move} bMode={true} />
    });
  },

  resetBattleMode() {
    Meteor.call('move.resetBattle', Meteor.userId(), (error) => {
      if (error) {
        sAlert.error(error.reason);
      }
    });
  },

  render() {
    return (
      <div className="container">
        <ReactCSSTransitionGroup transitionName="pagetrans" transitionAppear={true}>
          <div className="types types-battle-mode" key="2">
            <h1>Battle Mode</h1>
            <button className="btn btn-reset" onClick={this.resetBattleMode}>Reset</button>
            <ul className="moves">
                {this.renderMoves()}
            </ul>
          </div>
        </ReactCSSTransitionGroup>
      </div>
    );
  }
});