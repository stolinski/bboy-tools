import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import {
  Route,
  Switch,
  Link,
} from 'react-router-dom';

import Thirties from './Thirties';
import Comboizer from './Comboizer';
import Timemachine from './Timemachine';


const PracticeTools = ({ match }) =>
  <div className="container">
    <ReactCSSTransitionGroup
      transitionName="pagetrans"
      transitionAppear
      transitionEnterTimeout={500}
      transitionAppearTimeout={500}
      transitionLeaveTimeout={500}
    >

      <Switch>
        <Route path="/practice-tools/thirties" component={Thirties} />
        <Route path="/practice-tools/one-in-the-chamber" component={Comboizer} />
        <Route path="/practice-tools/timemachine-mirror" component={Timemachine} />
        <Route
          exact path={match.url} render={() => (
            <div className="types practice-tools">
              <h1>Practice Tools</h1>
              <div className="types-wrapper">
                <Link className="practice-tool" to={`${match.url}/thirties`}>
                  <h3>30/30's</h3>
                  <p>
                    An airhorn and large clock let you know every 30 seconds.
                    Train rounds of 30sec for endurance, or do it in a group.
                  </p>
                </Link>
                <Link className="practice-tool" to={`${match.url}/one-in-the-chamber`}>
                  <h3>One In The Chamber</h3>
                  <p>
                    2 Random moves from your move book appear. Connect them with a transition you've never tried before.
                  </p>
                </Link>
                <Link className="practice-tool" to={`${match.url}/timemachine-mirror`}>
                  <h3>Timemachine Mirror</h3>
                  <p>
                    Watch yourself session in the past. A video mirror that uses your webcam to show you 30 seconds into the past. Throw a combo, come back and watch it.
                  </p>
                </Link>
              </div>
            </div>
          )}
        />
      </Switch>
    </ReactCSSTransitionGroup>
  </div>;

export default PracticeTools;
