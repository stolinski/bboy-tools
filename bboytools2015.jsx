// Define a collection to hold our tasks
Moves = new Mongo.Collection("moves");

if (Meteor.isClient) {

  FlowRouter.route('/', {
    action: function() {
      Tracker.autorun(function() {
        if(Meteor.userId()) {
          FlowRouter.go('/moves');
        }
        ReactLayout.render(MainLayout, {
          content: <Home />
        })        
      });
    }
  });

  FlowRouter.route('/moves', {
    action: function() {
      Tracker.autorun(function() {
        if(Meteor.userId()) {
          ReactLayout.render(MainLayout, {
            content: <App />
          });
        } else {
          FlowRouter.go('/');
        }
      });
    }
  });

  FlowRouter.route('/thirties', {
    action: function() {
      ReactLayout.render(MainLayout, {
        content: <Thirties />
      });
    }
  });  

  Meteor.startup(function () {
  });
}

if (Meteor.isServer) {
}

