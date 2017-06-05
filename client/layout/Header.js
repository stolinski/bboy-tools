import React, { PureComponent } from 'react';
import { autobind } from 'core-decorators';
import { withData } from 'meteor/orionsoft:react-meteor-data';

import MainNav from './MainNav';
import {
  toggleNav,
  closeNav,
} from '../actions';

@withData(() => ({
  navDrawer: Session.get('navDrawer'),
}))
@autobind
export default class Header extends PureComponent {

  closeMenu() {
    closeNav();
  }

  toggleMenu() {
    toggleNav();
  }

  render() {
    const menuToggle = this.props.navDrawer ? 'open main-menu' : 'main-menu';
    return (
      <header className={menuToggle}>
        <h2>Bboy Tools</h2>
        <MainNav toggleMenu={this.closeMenu} />
        <i className="fa fa-navicon" onClick={this.toggleMenu} />
        <i className="fa fa-times" onClick={this.toggleMenu} />
      </header>
    );
  }
}
