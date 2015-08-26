// Define a collection to hold our tasks
Moves = new Mongo.Collection("moves");

if (Meteor.isClient) {

  FlowRouter.route('/', {
    action: function() {
      // We render the template with React
      React.render(<Home />, document.getElementById('render-target'));
    }
  });

  FlowRouter.route('/moves', {
    action: function() {
      // We render the template with React
      React.render(<App />, document.getElementById("render-target"));
    }
  });

  Meteor.startup(function () {
  });
}

if (Meteor.isServer) {
}
