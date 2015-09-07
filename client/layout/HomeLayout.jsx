HomeLayout = React.createClass({

  getInitialState() {
    return {
      layoutClass: false
    };
  }, 

  headerEnter: function() {
    this.setState({layoutClass: false});
  },

  headerLeave: function() {
    this.setState({layoutClass: true});
  },

  render() {
    var layoutClasses = this.state.layoutClass ? 'page-wrapper home-layout scrolled' : 'page-wrapper home-layout';

    return <div>
      <div className={layoutClasses}>
        <Header /> 
        <Waypoint
          onEnter={this.headerEnter}
          onLeave={this.headerLeave}
          threshold={0}
        />          
        <img src="/img/tom.jpg" className="billboard" />
        <main className="">
          {this.props.content}
        </main>
      </div>
      <footer className="site-footer">
        Bboy Tools &copy; 2015
      </footer>
    </div>
  }
});