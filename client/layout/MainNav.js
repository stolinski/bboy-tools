import React, { PureComponent } from 'react';
import {
  Link,
} from 'react-router-dom';

import LoginButton from '../utilities/LoginButton';
import LogoutButton from '../utilities/LogoutButton';

export default class MainNav extends PureComponent {

  featureFlags() {
    return [
      { href: '/moves', label: 'My Moves', enabled: hasFeature('moves') },
      { href: '/practice-tools', label: 'Practice Tools', enabled: hasFeature('practice-tools') },
      { href: '/battle-tools', label: 'Battle Tools', enabled: hasFeature('battle-tools') },
      { href: '/locations', label: 'Locations Tool', enabled: hasFeature('locations') },
    ]
  }

  render() {
    const { toggleMenu, user } = this.props;
    return (
      <nav className="main-nav">
        <ul>
          {user &&
            this.featureFlags()
              .filter(feature => feature.enabled)
              .map(feature => <li key={feature.href} onClick={toggleMenu}><Link to={feature.href}>{feature.label}</Link></li>)
          }
          {/* Show login buttons based on users status */}
          {user ? <li><LogoutButton /></li> : <li><LoginButton /></li>}
        </ul>
      </nav>
    );
  }
}
