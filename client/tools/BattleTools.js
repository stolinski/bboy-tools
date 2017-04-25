import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const BattleTools = () =>
  <div className="container">
    <ReactCSSTransitionGroup
      transitionName="pagetrans"
      transitionAppear
      transitionEnterTimeout={500}
      transitionAppearTimeout={500}
      transitionLeaveTimeout={500}
    >
      <div className="types battle-tools">
        <h1>Battle Tools</h1>
        <div className="types-wrapper">
          <a className="practice-tool" href="/battle-tools/battle-mode">
            <h3>Battle Mode</h3>
            <p>Keep track of used and available moves while battling, so that you always know what's left in your aresenal.</p>
          </a>
        </div>
      </div>
    </ReactCSSTransitionGroup>
  </div>
;

export default BattleTools;
