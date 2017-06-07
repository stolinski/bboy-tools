import React from 'react';

const LogoutButton = () =>
  <button
    onClick={() => Meteor.logout()}
  >
    Logout
  </button>;

export default LogoutButton;
