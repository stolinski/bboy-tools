import React from 'react';
import ReactDOM from 'react-dom';

AccountsUIWrapper = React.createClass({
  componentDidMount() {
    this.view = Blaze.render(Template.loginButtons, ReactDOM.findDOMNode(this.refs.container));
  },
  componentWillUnmount() {
    Blaze.remove(this.view);
  },
  render() {
    return <span ref="container" />;
  },
});
