import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import Header from './Header';
import MyMoves from '../moves/MyMoves';
import PracticeTools from '../tools/PracticeTools';
import BattleTools from '../tools/BattleTools';

const MainLayout = () => (
  <div className="main-layout-wrapper">
    <div>
      <Header />
      <main className="main-layout">
        <Switch>
          <Route exact path="/moves" component={MyMoves} />
          <Route path="/practice-tools" component={PracticeTools} />
          <Route path="/battle-tools" component={BattleTools} />
        </Switch>
      </main>
    </div>
    <footer className="site-footer">
      <h2 className="logo">Bboy Tools</h2>
    </footer>
  </div>
);

export default MainLayout;
