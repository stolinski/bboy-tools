_ = lodash
// mount animation <ReactCSSTransitionGroup> from React namespace
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

// Type component - represents the whole type
Type = React.createClass({
  propTypes: {
    // This component gets the move to display through a React prop.
    // We can use propTypes to indicate it is required
    type: React.PropTypes.object.isRequired
  },

  getInitialState() {
    return {
      formToggle: false
    };
  }, 

  renderCategory() {
    return _.startCase(this.props.type[0].type);
  },
  renderCategorySnake() {
    return this.props.type[0].type;
  },
  typeClasses() {
    return _.kebabCase(this.props.type[0].type) + " type";
  },

  openForm() {
    this.setState({formToggle: !this.state.formToggle});
  },

  renderTypes() {
    // Get types from this.data.types
    return this.props.type.map((move) => {
      return <Move key={move._id} move={move} />;
    });
  },

  handleSubmit(event) {
    event.preventDefault();
 
    // Find the text field via the React ref
    var name = React.findDOMNode(this.refs.moveName).value.trim();
    var value = React.findDOMNode(this.refs.moveValue).value.trim();
    var type = React.findDOMNode(this.refs.moveType).value.trim();
 
    Moves.insert({
      name: name,
      value: value,
      type: type,
      createdAt: new Date() // current time
    });
 
    // Clear form
    React.findDOMNode(this.refs.moveName).value = "";
    React.findDOMNode(this.refs.moveValue).value = "";
  },  

  render() {

    var toggleForm = this.state.formToggle ? 'open' : '';
    toggleForm += ' add-new-move';

    return (
        <div className={this.typeClasses()}>
          <h3>{this.renderCategory()}</h3>
          <ul className="moves">
            <ReactCSSTransitionGroup transitionName="newmove">
              {this.renderTypes()}
            </ReactCSSTransitionGroup>

            <li className="move-form">
              <form className="new-move" onSubmit={this.handleSubmit} >
                <input
                  type="text"
                  ref="moveName"
                  placeholder="Move Name" />
                <input
                  type="number"
                  ref="moveValue"
                  min="0"
                  max="10"
                  placeholder="Value" />
                <input
                  type="hidden"
                  ref="moveType"
                  value={this.renderCategorySnake()} />
                <button type="submit">
                  <i className="fa fa-check"></i>
                </button>
              </form>
            </li>

          </ul>   
          <button 
            className={toggleForm}
            onClick={this.openForm}>
              <span className="form-toggle-icons">
                <i className="fa fa-plus"></i>
                <i className="fa fa-minus"></i>
              </span>
              <span className="form-toggle-text">New Move</span>
          </button>
        </div> 
    );
  }
});