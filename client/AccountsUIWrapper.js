import React, { PureComponent } from 'react';
import findDOMNode from 'react-dom/lib/findDOMNode';

export default class AccountsUIWrapper extends PureComponent {
  componentDidMount() {
    this.view = Blaze.render(Template.loginButtons, findDOMNode(this.refs.container));
  }
  componentWillUnmount() {
    Blaze.remove(this.view);
  }
  render() {
    return <span ref="container" />;
  }
}
