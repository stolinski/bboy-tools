import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import MyMoves from "../moves/MyMoves";
import PracticeTools from "../tools/PracticeTools";
import BattleTools from "../tools/BattleTools";
// import Locations from "../tools/Locations";
// import Mixtapes from '../../collections/mixtapes';

const MainLayout = ({ user }) => {
  if (!user._id) return <Redirect to={{ pathname: "/" }} />;

  return (
    <main className="main-layout">
      <Switch>
        <Route exact path="/moves" component={MyMoves} />
        <Route path="/practice-tools" component={PracticeTools} />
        <Route path="/battle-tools" component={BattleTools} />
      </Switch>
      {/* <Mixtapes /> */}
    </main>
  );
};

export default MainLayout;
