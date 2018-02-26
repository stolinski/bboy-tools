import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Chamber = () =>
  <div className="container">
    <ReactCSSTransitionGroup transitionName="pagetrans" transitionAppear>
      <div className="types practice-tools">
        <h1>One In The Chamber</h1>
      </div>
    </ReactCSSTransitionGroup>
  </div>;

export default Chamber;
