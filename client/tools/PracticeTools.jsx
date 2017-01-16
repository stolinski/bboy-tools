import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const PracticeTools = () =>
  <div className="container">
    <ReactCSSTransitionGroup transitionName="pagetrans" transitionAppear>
      <div className="types practice-tools">
        <h1>Practice Tools</h1>
        <div className="types-wrapper">
          <a className="practice-tool" href="/practice-tools/thirties">
            <h3>30/30's</h3>
            <p>
              An airhorn and large clock let you know every 30 seconds.
              Train rounds of 30sec for endurance, or do it in a group.
            </p>
          </a>
          <a className="practice-tool" href="/practice-tools/comboizer">
            <h3>Comboizer</h3>
            <p>
              Create new combos and expand your creativity by building transitions between two randomly displayed moves.
            </p>
          </a>
          {/*
                        <a className='practice-tool' href='/practice-tools/one-in-the-chamber'>
                            <h3>One In The Chamber</h3>
                            <p>2 Random moves from your move book appear. Connect them with a transition you've never tried before.</p>
                        </a>*/}
        </div>
      </div>
    </ReactCSSTransitionGroup>
  </div>;

export default PracticeTools;
