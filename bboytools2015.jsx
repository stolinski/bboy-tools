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
      if(Meteor.userId()) {
        console.log('Moves - Render');
        ReactLayout.render(MainLayout, {
          content: <App />,
          route: "moves-page"
        });
      } else {
        console.log('Moves -> Home');
        FlowRouter.go('/');
      }
    }
  });

  FlowRouter.route('/thirties', {
    action: function() {
      if(Meteor.userId()) {
        console.log('Thirties - Render');
        ReactLayout.render(MainLayout, {
          content: <Thirties />
        });
      } else {
        console.log('Thirties -> Home');
        FlowRouter.go('/');
      }
    }
  });  

  FlowRouter.route('/battle-mode', {
    action: function() {
      if(Meteor.userId()) {
        console.log('Battle Mode - Route');
        ReactLayout.render(MainLayout, {
          content: <BattleMode />
        });
      } else {
        console.log('Battle Mode -> Home');
        FlowRouter.go('/');
      }
    }
  });  

}

if (Meteor.isServer) {
}

