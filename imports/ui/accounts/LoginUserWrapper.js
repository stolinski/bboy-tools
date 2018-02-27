import React, { Component } from "react";
import PropTypes from "prop-types";
import { withApollo } from "react-apollo";
import { withRouter } from "react-router-dom";
import EmailPasswordForm from "./EmailPasswordForm";

@withApollo
@withRouter
export default class LoginWindowWrapper extends Component {
  loginWithPassword = e => {
    e.preventDefault();
    const email = $("#email").val();
    const password = $("#password")
      .val()
      .trim();

    Meteor.loginWithPassword(email, password, error => {
      if (error) {
        console.log(`There was an error:${error.reason}`);
      } else {
        console.log("no error");
        this.props.client.resetStore();
        this.props.history.push("/moves");
      }
    });
  };

  render() {
    return (
      <div className="login-form">
        <h2>Login</h2>
        <EmailPasswordForm
          submitBtnLabel="Login"
          submitAction={this.loginWithPassword}
        />
        <p>
          Don&apos;t have an account? <br />
          <a onClick={this.props.toggleLogin}>Register</a>
        </p>
      </div>
    );
  }
}
