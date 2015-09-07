BattleMode = React.createClass({
  // This mixin makes the getMeteorData method work
  mixins: [ReactMeteorData],
 
  // Loads items from the Moves collection and puts them on this.data.moves
  getMeteorData() {
    return {
      // moves: Moves.find({}, {sort: {createdAt: 1}}).fetch(),
      moves: Moves.find({owner: Meteor.userId()}, {sort: {createdAt: 1}}).fetch(),
      currentUser: Meteor.user()
    }
  },
  renderMoves(){
    return this.data.moves.map((move) => {
      return <Move key={move._id} move={move} bMode={true} />
    });
  },
  render: function() {
    return (
      <div className="container">
        <h1>Battle Mode</h1>
        <div className="types types-battle-mode">
            <div className="moves">
                {this.renderMoves()}
            </div>
        </div>
      </div>
    );
  }
});