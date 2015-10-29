if (Meteor.isClient) {
  // uses gwendall:auth-client-callbacks
  Accounts.onLogin(function(){
    FlowRouter.go('moves');
  });

  Accounts.onLogout(function(){
    FlowRouter.go('home');
  });
}

FlowRouter.route('/', {
  name: 'home',
  action: function() {
    if(Meteor.userId()) {
      FlowRouter.go('/moves');
    }
    ReactLayout.render(HomeLayout, {
      content: <Home />
    })
  }
});

FlowRouter.route('/moves', {
  name: 'moves',
  subscriptions: function() {
    this.register( 'users', Meteor.subscribe( 'users' ) );
  },
  action: () => {
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

FlowRouter.route('/practice-tools', {
  action: function() {
    if(Meteor.userId()) {
      console.log('Practice Tools - Route');
      ReactLayout.render(MainLayout, {
        content: <PracticeTools />,
        route: "practice-tools"
      });
    } else {
      console.log('Battle Mode -> Home');
      FlowRouter.go('/');
    }
  }
});  

FlowRouter.route('/practice-tools/thirties', {
  action: function() {
    if(Meteor.userId()) {
      console.log('Thirties - Render');
      ReactLayout.render(MainLayout, {
        content: <Thirties />,
        route: "thirties-page"
      });
    } else {
      console.log('Thirties -> Home');
      FlowRouter.go('/');
    }
  }
});

FlowRouter.route('/practice-tools/one-in-the-chamber', {
  action: function() {
    if(Meteor.userId()) {
      console.log('Chamber - Render');
      ReactLayout.render(MainLayout, {
        content: <Chamber />,
        route: "thirties-page"
      });
    } else {
      console.log('Chamber -> Home');
      FlowRouter.go('/');
    }
  }
});


FlowRouter.route('/battle-tools', {
  action: function() {
    if(Meteor.userId()) {
      console.log('Battle Tools - Route');
      ReactLayout.render(MainLayout, {
        content: <BattleTools />,
        route: "battle-tools"
      });
    } else {
      console.log('BBattle Tools -> Home');
      FlowRouter.go('/');
    }
  }
});

FlowRouter.route('/battle-tools/battle-mode', {
  action: function() {
    if(Meteor.userId()) {
      console.log('Battle Mode - Route');
      ReactLayout.render(MainLayout, {
        content: <BattleMode />,
        route: "battle-page"
      });
    } else {
      console.log('Battle Mode -> Home');
      FlowRouter.go('/');
    }
  }
});  
