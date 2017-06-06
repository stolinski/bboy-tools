import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import { HomeLayout } from './layout/HomeLayout';
import MainLayout from './layout/MainLayout';

import { toggleNav, closeNav, closeAccounts,
 } from './actions';


const PrivateRoute = ({ component: Component, ...rest }) =>
  <Route
    {...rest} render={props => (
      Meteor.userId() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/',
            state: { from: props.location },
          }}
        />
      )
    )}
  />;

const App = () =>
  <Switch>
    <Route exact path="/" component={HomeLayout} />
    <PrivateRoute path="/" component={MainLayout} />
  </Switch>;

Meteor.startup(() => {
  ReactDOM.render((
    <Router>
      <App />
    </Router>
  ), document.getElementById('react-root'));
});


// const battleTools = FlowRouter.group({
//   prefix: '/battle-tools',
// });

// battleTools.route('/', {
//   action() {
//     mount(MainLayout, {
//       content: () => (<BattleTools />),
//     });
//   },
// });
// battleTools.route('/battle-mode', {
//   action() {
//     mount(MainLayout, {
//       content: () => (<BattleMode />),
//     });
//   },
// });


// Accounts.onLogin(() => {
//   if (FlowRouter.current().path === '/') {
//     closeNav();
//     closeAccounts();
//     FlowRouter.go('moves');
//   }
// });

// Accounts.onLogout(() => {
//   closeNav();
//   closeAccounts();
//   FlowRouter.go('home');
// });
