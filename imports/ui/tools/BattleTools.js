import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {
  Route,
  Switch,
  Link,
} from 'react-router-dom';

import BattleMode from './BattleMode';

const BattleTools = ({ match }) =>
  <div className="container">
    <ReactCSSTransitionGroup
      transitionName="pagetrans"
      transitionAppear
      transitionEnterTimeout={500}
      transitionAppearTimeout={500}
      transitionLeaveTimeout={500}
    >
      <Switch>
        <Route path="/battle-tools/battle-mode" component={BattleMode} />
        <Route
          exact path={match.url} render={() => (
            <div className="types battle-tools">
              <h1>Battle Tools</h1>
              <div className="types-wrapper">
                <Link className="practice-tool" to="/battle-tools/battle-mode">
                  <h3>Battle Mode</h3>
                  <p>Keep track of used and available moves while battling, so that you always know what's left in your aresenal.</p>
                </Link>
              </div>
            </div>
          )}
        />
      </Switch>
    </ReactCSSTransitionGroup>
  </div>
;

export default BattleTools;
