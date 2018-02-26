import React from 'react';

const LogoutButton = () =>
  <button
    onClick={() => { Meteor.logout(); Session.set('navDrawer', false); }}
  >
    Logout
  </button>;

export default LogoutButton;
