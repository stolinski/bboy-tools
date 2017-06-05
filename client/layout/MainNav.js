import React, { PureComponent } from 'react';

// import { autobind } from 'core-decorators';

export default class MainNav extends PureComponent {

  featureFlags = [
    { 'href':'/moves',           'label':'My Moves',       'enabled':true },
    { 'href':'/practice-tools',  'label':'Practice Tools', 'enabled':true },
    { 'href':'/battle-tools',    'label':'Battle Tools',   'enabled':true },
    { 'href':'/locations',       'label':'Locations Tool', 'enabled':false },
  ];

  navLinks(featureFlags, toggleMenu){
    links = [];
    featureFlags.forEach(function(feature){
      if (feature.enabled)
        links.push(<li><a onClick={toggleMenu} href={feature.href}>{feature.label}</a></li>)
    });
    return links;
  }

  render() {
    const { toggleMenu } = this.props;
    return (
      <nav className="main-nav">
        {
          Meteor.userId() ? (
            <ul>
              {this.navLinks(this.featureFlags, toggleMenu)}
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
