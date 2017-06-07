import React from 'react';

const LoginButton = () =>
  <button
    onClick={() => Session.set('Meteor.loginButtons.dropdownVisible', true)}
  >
    Login / Signup
  </button>;

export default LoginButton;
