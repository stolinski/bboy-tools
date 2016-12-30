import React from 'react';
// import { autobind } from 'core-decorators';

MainNav = React.createClass({
  render() {
    let loggedIn;
    if (Meteor.userId()) {
      loggedIn = (
        <ul>
          <li><a onClick={this.props.toggleMenu} href="/moves">My Moves</a></li>
          <li><a onClick={this.props.toggleMenu} href="/practice-tools">Practice Tools</a></li>
          <li><a onClick={this.props.toggleMenu} href="/battle-tools">Battle Tools</a></li>
          <li><AccountsUIWrapper /></li>
        </ul>
        );
    } else {
      loggedIn = (
        <ul>
          <li><AccountsUIWrapper /></li>
        </ul>
        );
    }

    return (
      <nav className="main-nav">
        {loggedIn}
      </nav>
    );
  },
});
