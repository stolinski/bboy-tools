import React from "react";
import { withApollo } from "react-apollo";

const LogoutButton = props => (
  <button
    onClick={() => {
      Session.set("navDrawer", false);
      Session.set("loginOpen", false);
      Meteor.logout();
      props.client.resetStore();
    }}
  >
    Logout
  </button>
);

export default withApollo(LogoutButton);
