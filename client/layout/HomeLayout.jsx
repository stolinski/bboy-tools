HomeLayout = React.createClass({
  render() {
    return <div>
      <div className="page-wrapper home-layout">
        <Header /> 
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