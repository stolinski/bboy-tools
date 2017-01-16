import React from 'react';

import MainNav from './MainNav';

Header = React.createClass({
  getInitialState() {
    return {
      menuClass: false,
    };
  },

  closeMenu() {
    this.setState({ menuClass: false });
  },

  toggleMenu() {
    this.setState({ menuClass: !this.state.menuClass });
  },

  render() {
    const menuToggle = this.state.menuClass ? 'open main-menu' : 'main-menu';
    return (
      <header className={menuToggle}>
        <h2>Bboy Tools</h2>
        <MainNav toggleMenu={this.closeMenu} />
        <i className="fa fa-navicon" onClick={this.toggleMenu} />
        <i className="fa fa-times" onClick={this.toggleMenu} />
      </header>
    );
  },
});
