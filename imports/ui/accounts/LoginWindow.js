import React, { Component } from 'react';
import autobind from 'core-decorators/lib/autobind';

import RegisterUserWrapper from './RegisterUserWrapper';
import LoginUserWrapper from './LoginUserWrapper';

import Icon from '../icons/Icon';

@autobind
export default class LoginWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
    };
  }

  toggleLogin() {
    this.setState({
      login: !this.state.login,
    });
  }

  render() {
    return (
      <div
        className="login-window" style={{
          position: 'fixed',
          backgroundColor: '#111111',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <Icon name="close" color="white" onClick={() => Session.set('loginOpen', false)} />
        {this.state.login ? (
          <LoginUserWrapper toggleLogin={this.toggleLogin} />
        ) : (
          <RegisterUserWrapper toggleLogin={this.toggleLogin} />
        )}
      </div>
    );
  }
}

