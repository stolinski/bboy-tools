import React, { Component, PropTypes } from 'react';
import EmailPasswordForm from './EmailPasswordForm';

export default class RegisterUserWrapper extends Component {
  static defaultProps = {
    loginLink: <p>{'Already have an account?'} <a href="/login">Sign In</a></p>,
  }
  static propTypes = {}
  constructor(props) {
    super(props);
    this.state = {};
  }

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
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <h1>Register</h1>
          <EmailPasswordForm
            submitBtnLabel="Register"
            submitAction={this.createUser}
          />
          {this.props.loginLink}
        </div>
      </div>
    );
  }
}
