_ = lodash

// About component - represents the whole about
MainNav = React.createClass({
  render() {
    return (
    	<nav className="main-nav">
    		<ul>
    			<li><a href="/moves">My Moves</a></li>
    			<li><a href="/thirties">30/30s</a></li>
    			<li><AccountsUIWrapper /></li>
    		</ul>
    	</nav>
    );
  }
});