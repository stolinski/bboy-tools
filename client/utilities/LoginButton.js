import React from 'react';

const LoginButton = () =>
  <button
    className="btn btn-primary"
    onClick={() => Session.set('loginOpen', true)}
  >
    Login / Signup
  </button>;

export default LoginButton;
