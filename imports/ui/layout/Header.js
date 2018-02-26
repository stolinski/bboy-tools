import React, { PureComponent } from "react";
import { withData } from "meteor/orionsoft:react-meteor-data";
import AccountsUIWrapper from "../AccountsUIWrapper";

import LoginWindow from "imports/ui/accounts/LoginWindow";

import MainNav from "./MainNav";
import { toggleNav, closeNav } from "../actions";

@withData(() => ({
  navDrawer: Session.get("navDrawer"),
  loginOpen: Session.get("loginOpen")
}))
export default class Header extends PureComponent {
  closeMenu = () => {
    closeNav();
  };

  openMenu = () => {
    toggleNav();
  };

  render() {
    const menuToggle = this.props.navDrawer ? "open main-menu" : "main-menu";
    const { user, userSub, loginOpen } = this.props;
    return (
      <header className={menuToggle}>
        <h2 className="logo">Bboy Tools</h2>
        {/* Menu shouldn't even exist if you aren't logged in */}
        {user && userSub && <MainNav toggleMenu={this.closeMenu} user={user} />}
        {!user && userSub && loginOpen && <LoginWindow />}
        {user && <i className="fa fa-navicon" onClick={this.openMenu} />}
        {user && <i className="fa fa-times" onClick={this.closeMenu} />}
      </header>
    );
  }
}
