MainLayout = React.createClass({
  render() {
    return <div>
      <div className="page-wrapper">
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