_ = lodash

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

Meteor.subscribe("moves", Meteor.userId());

// App component - represents the whole app
App = React.createClass({
 
  mixins: [ReactMeteorData],

  // Loads items from the Moves collection and puts them on this.data.moves
  getMeteorData() {
    return {
      // moves: Moves.find({}, {sort: {createdAt: 1}}).fetch(),
      moves: Moves.find({}, {sort: {createdAt: 1}}).fetch(),
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
    _.each(start, function(type){
      type._id = Random.id();
    });
    var copy = start.slice();

    // Merge Two Arrays of objects
    function mergeByProperty(arr1, arr2, prop) {
        _.each(arr2, function(arr2obj) {
            var arr1obj = _.find(arr1, function(arr1obj) {
                return arr1obj[prop] === arr2obj[prop];
            });
            arr1obj ? start.push(arr2obj) : arr1.push(arr2obj);
        });
    }
    
    //Merges Starting Array with Moves by the Type property
    mergeByProperty(start, this.data.moves, 'type');

    // Get moves from this.data.moves
    return _.map(copy, function(type, index) {
      var movez = _.filter(start, function(n){
        return n.type === type.type;
      });
      return <Type key={type._id} type={type} moves={movez} />;
    });
  },

  render() {
    return (
      <div className="container">
        <ReactCSSTransitionGroup transitionName="pagetrans" transitionAppear={true}>
          <div className="types" key="1">
            <h1>My Moves</h1>
            <div className="types-wrapper">
              {this.renderMoves()}
            </div>
          </div>
        </ReactCSSTransitionGroup>
      </div>
    );
  }
});