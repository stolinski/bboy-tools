// About component - represents the whole about
Header = React.createClass({
  getInitialState: function() {
    return {
      menuClass: false
    };
  },	
  toggleMenu() {
    this.setState({menuClass: !this.state.menuClass});
  },

  render() {

    var menuToggle = this.state.menuClass ? 'open' : '';
    return (
        <header className={menuToggle}>
            <h2>Bboy Tools</h2>
            <MainNav />
            <i className="fa fa-navicon" onClick={this.toggleMenu}></i>
            <i className="fa fa-times" onClick={this.toggleMenu}></i>
        </header>
    );
  }
});