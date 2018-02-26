import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import currentUser from "../containers/currentUser";

import Header from "./Header";
import HomeLayout from "./HomeLayout";
import MainLayout from "./MainLayout";

@withRouter
@currentUser
export default class App extends Component {
  render() {
    const { userSub, user } = this.props;
    return (
      <div className="main-layout-wrapper">
        <div>
          <Header userSub={userSub} user={user} />
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <HomeLayout {...props} userSub={userSub} user={user} />
              )}
            />
            <Route
              path="/"
              render={props => (
                <MainLayout {...props} userSub={userSub} user={user} />
              )}
            />
          </Switch>
        </div>
        <footer className="site-footer">
          <h2 className="logo">Bboy Tools</h2>
        </footer>
      </div>
    );
  }
}
