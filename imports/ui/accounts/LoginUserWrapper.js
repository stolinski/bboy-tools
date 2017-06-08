import React, { Component, PropTypes } from 'react';

import EmailPasswordForm from './EmailPasswordForm';

export default class LoginWindowWrapper extends Component {
  static defaultProps = {
    registerLink: <p>{'Don\'t have an account?'} <a href="/register">Register</a></p>,
  }
  static propTypes = {}

  constructor(props) {
    super(props);
    this.state = {};
  }

  loginWithPassword(e) {
    e.preventDefault();
    const email = $('#email').val();
    const password = $('#password').val().trim();

    Meteor.loginWithPassword(email, password, (error) => {
      if (error) {
        console.log(`There was an error:${error.reason}`);
      } else {
        console.log('no error');
      }
    });
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <h1>Login</h1>
          <EmailPasswordForm
            submitBtnLabel="Login"
            submitAction={this.loginWithPassword}
          />
          {this.props.registerLink}
        </div>
      </div>
    );
  }
}
