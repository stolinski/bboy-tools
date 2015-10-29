// uses gwendall:auth-client-callbacks
Accounts.onLogin(function(){
  FlowRouter.go('moves');
});

Accounts.onLogout(function(){
  FlowRouter.go('home');
});


MainLayout = React.createClass({
  propTypes: {
    // This component gets the move to display through a React prop.
    // We can use propTypes to indicate it is required
    route: React.PropTypes.string
  },

  render() {
    var wrapperClass = 'page-wrapper ';
    wrapperClass += this.props.route

    return <div>
      <div className={wrapperClass}>
        <Header /> 
        <main className="main-layout">
          {this.props.content}
        </main>
      </div>
      <footer className="site-footer">
        Bboy Tools &copy; 2015
      </footer>
    </div>
  }
});