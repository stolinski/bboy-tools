import React, { PureComponent } from 'react';

// import { autobind } from 'core-decorators';

export default class MainNav extends PureComponent {

  featureFlags = [
    {'href':'/moves',           'label':'My Moves'},
    {'href':'/practice-tools',  'label':'Practice Tools'},
    {'href':'/battle-tools',    'label':'Battle Tools'},
    //{'href':'/locations',       'label':'Locations Tool'}
  ];

  navLinks(featureFlags, toggleMenu){
    links = [];
    featureFlags.forEach(function(feature){
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
