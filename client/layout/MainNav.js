import React, { PureComponent } from 'react';
import {
  Link,
} from 'react-router-dom';

import LoginButton from '../utilities/LoginButton';
import LogoutButton from '../utilities/LogoutButton';

export default class MainNav extends PureComponent {

  featureFlags = [
    { href: '/moves', label: 'My Moves', enabled: true },
    { href: '/practice-tools', label: 'Practice Tools', enabled: true },
    { href: '/battle-tools', label: 'Battle Tools', enabled: true },
    { href: '/locations', label: 'Locations', enabled: true },
  ]

  render() {
    const { toggleMenu, user } = this.props;
    return (
      <nav className="main-nav">
        <ul>
          {user &&
            this.featureFlags
              .filter(feature => feature.enabled)
              .map(feature => <li key={feature.href}><Link onClick={toggleMenu} to={feature.href}>{feature.label}</Link></li>)
          }
          {/* Show login buttons based on users status */}
          {user ? <li><LogoutButton /></li> : <li><LoginButton /></li>}
        </ul>
      </nav>
    );
  }
}
