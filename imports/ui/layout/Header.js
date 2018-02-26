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
    this.nav.animate([{ height: "100vh" }, { height: "0vh" }], {
      duration: 300,
      fill: "forwards",
      easing: "cubic-bezier(0.86, 0, 0.07, 1)"
    });
  };

  openMenu = () => {
    toggleNav();
    this.nav.animate([{ height: "0vh" }, { height: "100vh" }], {
      duration: 300,
      fill: "forwards",
      easing: "cubic-bezier(0.86, 0, 0.07, 1)"
    });
  };

  render() {
    const { user, loginOpen, navDrawer } = this.props;
    return (
      <header className={navDrawer ? "open main-menu" : "main-menu"}>
        <h2 className="logo">Bboy Tools</h2>
        {/* Menu shouldn't even exist if you aren't logged in */}
        {user && (
          <MainNav
            toggleMenu={this.closeMenu}
            user={user}
            ref={nav => (this.nav = ReactDOM.findDOMNode(nav))}
          />
        )}
        {!user && loginOpen && <LoginWindow />}
        {user && <i className="fa fa-navicon" onClick={this.openMenu} />}
        {user &&
          navDrawer && <i className="fa fa-times" onClick={this.closeMenu} />}
      </header>
    );
  }
}
