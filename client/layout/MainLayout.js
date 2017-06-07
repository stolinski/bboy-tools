import React from 'react';
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import MyMoves from '../moves/MyMoves';
import PracticeTools from '../tools/PracticeTools';
import BattleTools from '../tools/BattleTools';

const MainLayout = ({ userSub, user }) => {
  if (userSub && !user) return <Redirect to={{ pathname: '/' }} />;

  return (
    <Switch>
      <Route exact path="/moves" component={MyMoves} />
      <Route path="/practice-tools" component={PracticeTools} />
      <Route path="/battle-tools" component={BattleTools} />
    </Switch>
  );
};

export default MainLayout;
