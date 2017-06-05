import React, { PureComponent } from 'react';

// import { autobind } from 'core-decorators';

export default class MainNav extends PureComponent {
  render() {
    const { toggleMenu } = this.props;
    return (
      <nav className="main-nav">
        {Meteor.userId()
          ? <ul>
            <li><a onClick={toggleMenu} href="/moves">My Moves</a></li>
            <li>
              <a onClick={toggleMenu} href="/practice-tools">Practice Tools</a>
            </li>
            <li><a onClick={toggleMenu} href="/battle-tools">Battle Tools</a></li>
            <li>
              <AccountsUIWrapper />
            </li>
          </ul>
          : <ul>
            <li>
              <AccountsUIWrapper />
            </li>
          </ul>}
      </nav>
    );
  }
}
