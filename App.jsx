_ = lodash

// mount animation <ReactCSSTransitionGroup> from React namespace
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

// App component - represents the whole app
App = React.createClass({
 
  // This mixin makes the getMeteorData method work
  mixins: [ReactMeteorData],
 
  // Loads items from the Moves collection and puts them on this.data.moves
  getMeteorData() {
    return {
      moves: Moves.find({}, {sort: {createdAt: 1}}).fetch(),
      // moves: Moves.find({owner: Meteor.userId()}, {sort: {createdAt: 1}}).fetch(),
      currentUser: Meteor.user()
    }
  },
 
  renderMoves() {
    var start = [
      {
        type: 'top_rock'
      }, {
        type: 'go_down'
      }, {
        type: 'footwork'
      }, {
        type: 'power_move'
      }, {
        type: 'freeze'
      }, {        
        type: 'burner'
      }
    ]


    function mergeByProperty(arr1, arr2, prop) {
        _.each(arr2, function(arr2obj) {
            var arr1obj = _.find(arr1, function(arr1obj) {
                return arr1obj[prop] === arr2obj[prop];
            });

            arr1obj ? start.push(arr2obj) : arr1.push(arr2obj);
        });
    }
    mergeByProperty(start, this.data.moves, 'type');
     // start = this.data.moves;

    var group = _.groupBy(start, function(move) {
      return move.type;
    });


    // Get moves from this.data.moves
    return _.map(group, function(type) {
      return <Type key={type._id} type={type} />;
    });
  },

  handleSubmit(event) {
    event.preventDefault();
 
    // Find the text field via the React ref
    var name = React.findDOMNode(this.refs.moveName).value.trim();
    var value = React.findDOMNode(this.refs.moveValue).value.trim();
    var type = React.findDOMNode(this.refs.moveType).value.trim();
    var battleUsed = false;
 
    Moves.insert({
      name: name,
      value: value,
      type: type,
      battleUsed: battleUsed,
      owner: Meteor.userId(),           // _id of logged in user
      username: Meteor.user().username,  // username of logged in user      
      createdAt: new Date() // current time
    });
 
    // Clear form
    React.findDOMNode(this.refs.moveName).value = "";
    React.findDOMNode(this.refs.moveValue).value = "";
  },
 
  render() {
    return (
      <div className="container">
        <header>
          <h2>Bboy Tools</h2>
          <MainNav />
        </header>      
        <form className="brand-new-move" onSubmit={this.handleSubmit} >
          <input
            type="text"
            ref="moveName"
            placeholder="Move Name" />
          <input
            type="number"
            ref="moveValue"
            placeholder="Value" />
          <select ref="moveType"> 
            <option value="top_rock">Top Rock</option>
            <option value="go_down">Go Down</option>
            <option value="footwork">Footwork</option>
            <option value="power_move">Power Move</option>
            <option value="freeze">Freeze</option>
            <option value="burner">Burner</option>
          </select>
          <input type="submit" />
        </form> 
        <div className="types">
          <div className="book">
            <p>1<span className="book-title">Move Book</span></p>
          </div>
          {this.renderMoves()}
        </div>
      </div>
    );
  }
});