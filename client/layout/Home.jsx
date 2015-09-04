_ = lodash

// About component - represents the whole about
Home = React.createClass({


  handleClick() {
    var e = document.getElementById("login-sign-in-link");
    console.log(e);
    e.click();
    // React.addons.TestUtils.Simulate.click(e);
  },

  render() {
    return (
      <div className="container">
          <section className="site-intro homepage-zone">
            <h2>Bboy Tools</h2><br />
            <p>Save your moves and improve your skills</p>
            <br />
            <button onClick={this.handleClick}>Sign Up</button>
          </section>
      </div>
    );
  }
});