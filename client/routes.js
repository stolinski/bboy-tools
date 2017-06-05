import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

import App from './layout/App';

Meteor.startup(() => {
  ReactDOM.render((
    <Router>
      <App />
    </Router>
  ), document.getElementById('react-root'));
});
