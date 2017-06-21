import React, { Component, PropTypes } from 'react';
import EmailPasswordForm from './EmailPasswordForm';

export default class RegisterUserWrapper extends Component {

  static propTypes = {}

  createUser(e) {
    e.preventDefault();
    const email = $('#email').val();
    const password = $('#password').val().trim();

    Accounts.createUser(
      {
        email,
        password,
      },
      (error) => {
        if (error) {
          console.log(`there was an error: ${error.reason}`);
        } else {
          console.log('no error');
        }
      }
    );
  }

  render() {
    return (
      <div className="register-form">
        <h2>Register</h2>
        <EmailPasswordForm
          submitBtnLabel="Register"
          submitAction={this.createUser}
        />
        <p>Already have an account? <br /><a onClick={this.props.toggleLogin}>Sign In</a></p>
      </div>
    );
  }
}
