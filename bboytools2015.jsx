// Define a collection to hold our tasks
Moves = new Mongo.Collection("moves");

if (Meteor.isClient) {

  FlowRouter.route('/', {
    action: function() {
      Tracker.autorun(function() {
        if(Meteor.userId()) {
          FlowRouter.go('/moves');
        }
        ReactLayout.render(HomeLayout, {
          content: <Home />
        })        
      });
    }
  });

  FlowRouter.route('/moves', {
    subscriptions: function() {
      this.register( 'users', Meteor.subscribe( 'users' ) );
    },    
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

  FlowRouter.route('/battle-mode', {
    action: function() {
      ReactLayout.render(MainLayout, {
        content: <BattleMode />
      });
    }
  });  

  Meteor.startup(function () {
  });
}

if (Meteor.isServer) {
}

