_ = lodash

MainNav = React.createClass({

  render() {
    var loggedIn;
    if(Meteor.userId()){
        loggedIn = (
            <ul>
                <li><a href="/moves">My Moves</a></li>
                <li><a href="/thirties">30/30s</a></li> 
                <li><AccountsUIWrapper /></li>
            </ul>
        )
    } else {
        loggedIn = (
            <ul>
                <li><AccountsUIWrapper /></li>
            </ul>  
        )      
    }
    return (
        <nav className="main-nav">
            {loggedIn}
        </nav>
    );
  }

});