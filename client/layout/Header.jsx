import React from 'react';

Header = React.createClass({
  getInitialState: function() {
    return {
      menuClass: false
    };
  },

  closeMenu() {
    this.setState({menuClass: false});
  },

  toggleMenu() {
    this.setState({menuClass: !this.state.menuClass});
  },

  render() {

    var menuToggle = this.state.menuClass ? 'open main-menu' : 'main-menu';
    return (
        <header className={menuToggle}>
            <h2>Bboy Tools</h2>
            <MainNav toggleMenu={this.closeMenu} />
            <i className="fa fa-navicon" onClick={this.toggleMenu}></i>
            <i className="fa fa-times" onClick={this.toggleMenu}></i>
        </header>
    );
  }
});
