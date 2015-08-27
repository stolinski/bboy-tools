_ = lodash

// About component - represents the whole about
Home = React.createClass({
  render() {
    return (
      <div className="container">
        <header>
          <h1>Bboy Tools</h1>
          <MainNav />
        </header>
        <main>
        	<StopWatch />
        	<section className="site-intro homepage-zone">
        		<h2>What Is Bboy Tools</h2>
        		<p>Bboy Tools is a way to save your moves and improve your skills</p>
        	</section>
        </main>
      </div>
    );
  }
});