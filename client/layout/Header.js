import React, { PureComponent } from 'react';
import { autobind } from 'core-decorators';
import { withData } from 'meteor/orionsoft:react-meteor-data';
import AccountsUIWrapper from '../AccountsUIWrapper';

import LoginWindow from '../../imports/ui/accounts/LoginWindow';

import MainNav from './MainNav';
import {
  toggleNav,
  closeNav,
  closeAccounts,
  toggleAccounts,
} from '../actions';

@withData(() => ({
  navDrawer: Session.get('navDrawer'),
  loginOpen: Session.get('loginOpen'),
}))
@autobind
export default class Header extends PureComponent {

  closeMenu() {
    closeNav();
    closeAccounts();
  }

  openMenu() {
    toggleNav();
  }

  render() {
    const menuToggle = this.props.navDrawer ? 'open main-menu' : 'main-menu';
    const { user, userSub, loginOpen } = this.props;
    return (
      <header className={menuToggle}>
        <h2 className="logo">Bboy Tools</h2>
        <MainNav toggleMenu={this.closeMenu} user={user} />
        {!user && userSub && loginOpen &&
          <LoginWindow />
        }
        {user && <i className="fa fa-navicon" onClick={this.openMenu} />}
        {user && <i className="fa fa-times" onClick={this.closeMenu} />}
      </header>
    );
  }
}
