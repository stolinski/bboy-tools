import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { graphql } from "react-apollo";
import CurrentUser from "imports/ui/user/containers/CurrentUser.graphql";

import Header from "./Header";
import HomeLayout from "./HomeLayout";
import MainLayout from "./MainLayout";

export class App extends Component {
  render() {
    const { user, loading } = this.props;
    if (loading) return null;
    return (
      <div className="main-layout-wrapper">
        <div>
          <Header user={user} />
          <Switch>
            <Route
              exact
              path="/"
              component={props => <HomeLayout {...this.props} />}
            />
            <Route path="/" render={props => <MainLayout {...this.props} />} />
          </Switch>
        </div>
        <footer className="site-footer">
          <h2 className="logo">Bboy Tools</h2>
        </footer>
      </div>
    );
  }
}

export default graphql(CurrentUser, {
  props: ({ data }) => ({ ...data })
})(withRouter(App));
