import React, { PureComponent } from "react";
import ReactDOM from "react-dom";
import { withTracker } from "meteor/react-meteor-data";
import AccountsUIWrapper from "../AccountsUIWrapper";
import LoginWindow from "imports/ui/accounts/LoginWindow";

import MainNav from "./MainNav";
import { toggleNav, closeNav } from "../actions";

@withTracker(() => ({
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
    const { user, loginOpen, navDrawer } = this.props;
    return (
      <header className={navDrawer ? "open main-menu" : "main-menu"}>
        <h2 className="logo">Bboy Tools</h2>
        {/* Menu shouldn't even exist if you aren't logged in */}
        {user._id && (
          <MainNav
            toggleMenu={this.closeMenu}
            user={user}
            ref={nav => (this.nav = ReactDOM.findDOMNode(nav))}
          />
        )}
        {!user._id && loginOpen && <LoginWindow />}
        {user._id && <i className="fa fa-navicon" onClick={this.openMenu} />}
        {user._id &&
          navDrawer && <i className="fa fa-times" onClick={this.closeMenu} />}
      </header>
    );
  }
}
