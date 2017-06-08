import React, { Component, PropTypes } from 'react';

import RegisterUserWrapper from './RegisterUserWrapper';
import LoginUserWrapper from './LoginUserWrapper';

export default class LoginWindow extends Component {
  static defaultProps = {}
  static propTypes = {}
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        className="register-user-wrapper" style={{
          position: 'fixed',
          backgroundColor: '#111111',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <RegisterUserWrapper />
        <LoginUserWrapper />
      </div>
    );
  }
}

