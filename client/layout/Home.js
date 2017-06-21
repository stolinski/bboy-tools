import React, { Component } from 'react';

import LoginButton from '../utilities/LoginButton';

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <section className="site-intro homepage-zone">
          <div className="site-intro-text">
            <p>Save your moves and improve your skills</p>
            <br />
            <LoginButton />
          </div>
          <img src="/img/tom.jpg" className="billboard" />
        </section>
        {/* <section className="first-zone homepage-zone">
          <i className="fa fa-wrench" />
          <h2><span>Practice & Battle Tools</span></h2>
          <div className="tools-tease">
            <article>
              <h3>Battle Mode</h3>
              <p>
                  Keep track of used and available moves while battling, so that you always know what's left in your aresenal.
              </p>
            </article>
            <article>
              <h3>One In The Chamber</h3>
              <p>
                  2 Random moves from your move book appear. Connect them with a transition you've never tried before.
              </p>
            </article>
            <article>
              <h3>30/30s</h3>
              <p>
                An airhorn and large clock let you know every 30 seconds. Train rounds of 30sec for endurance, or do it in a group and outlast your crew.
              </p>
            </article>
          </div>
        </section>*/}
      </div>
    );
  }
}
