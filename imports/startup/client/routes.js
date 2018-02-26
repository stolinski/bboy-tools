import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import client from "./apolloConfig";

import App from "imports/ui/layout/App";

Meteor.startup(() => {
  ReactDOM.render(
    <ApolloProvider client={client}>
      <Router>
        <App />
      </Router>
    </ApolloProvider>,
    document.getElementById("react-root")
  );
});
