import React from 'react';

const LoginButton = () =>
  <button
    onClick={() => Session.set('loginOpen', true)}
  >
    Login / Signup
  </button>;

export default LoginButton;
