import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';

export default class AccountsUIWrapper extends PureComponent {
  componentDidMount() {
    this.view = Blaze.render(Template.loginButtons, ReactDOM.findDOMNode(this.refs.container));
  }
  componentWillUnmount() {
    Blaze.remove(this.view);
  }
  render() {
    return <span ref="container" />;
  }
}
