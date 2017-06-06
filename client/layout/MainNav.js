import React, { PureComponent } from 'react';
import {
  Link,
} from 'react-router-dom';

import AccountsUIWrapper from '../AccountsUIWrapper';

export default class MainNav extends PureComponent {

  featureFlags = [
    { href: '/moves', label: 'My Moves', enabled: true },
    { href: '/practice-tools', label: 'Practice Tools', enabled: true },
    { href: '/battle-tools', label: 'Battle Tools', enabled: true },
    { href: '/locations', label: 'Locations Tool', enabled: false },
  ]

  render() {
    const { toggleMenu } = this.props;
    return (
      <nav className="main-nav">
        {
          Meteor.userId() ? (
            <ul>
              {this.featureFlags
                .filter(feature => feature.enabled)
                .map(feature => <li key={feature.href}><Link onClick={toggleMenu} to={feature.href}>{feature.label}</Link></li>)
              }
              <li>
                <AccountsUIWrapper />
              </li>
            </ul>
          ) : (
            <ul>
              <li>
                <AccountsUIWrapper />
              </li>
            </ul>
          )
        }
      </nav>
    );
  }
}
