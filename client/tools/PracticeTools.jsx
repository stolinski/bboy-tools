var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

PracticeTools = React.createClass({
  render: function() {
    return (
      <div className="container">
        <ReactCSSTransitionGroup transitionName="pagetrans" transitionAppear={true}>
            <div className="types practice-tools">
                <h1>Practice Tools</h1>
                <div className="types-wrapper">
                    <a className="practice-tool" href="/practice-tools/thirties">
                        <h3>30/30's</h3>
                        <p>An airhorn and large clock let you know every 30 seconds. Train rounds of 30sec for endurance, or do it in a group and outlast your crew.</p>
                    </a>
                    <a className="practice-tool" href="/practice-tools/one-in-the-chamber">
                        <h3>One In The Chamber</h3>
                        <p>2 Random moves from your move book appear. Connect them with a transition you've never tried before.</p>
                    </a>
                </div>            
            </div>
        </ReactCSSTransitionGroup>
      </div>
    );
  }
});