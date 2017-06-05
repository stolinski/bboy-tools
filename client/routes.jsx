import React from 'react';
import { mount } from 'react-mounter';

import { HomeLayout } from './layout/HomeLayout';
import { MainLayout } from './layout/MainLayout';
import Home from './layout/Home';
import App from './moves/App';
import PracticeTools from './tools/PracticeTools.jsx';
import BattleTools from './tools/BattleTools';
import Thirties from './tools/Thirties.jsx';
import Comboizer from './tools/Comboizer';
import Timemachine from './tools/Timemachine';
import BattleMode from './tools/BattleMode.jsx';

FlowRouter.route('/', {
  name: 'home',
  action() {
    if (Meteor.userId()) { FlowRouter.go('moves'); }
    mount(HomeLayout, {
      content: () => (<Home />),
    });
  },
});

FlowRouter.route('/moves', {
  name: 'moves',
  action() {
    if (!Meteor.userId()) { FlowRouter.go('home'); }
    mount(MainLayout, {
      content: () => (<App />),
    });
  },
});

const practiceTools = FlowRouter.group({
  prefix: '/practice-tools',
});

practiceTools.route('/', {
  action() {
    mount(MainLayout, {
      content: () => (<PracticeTools />),
    });
  },
});

practiceTools.route('/thirties', {
  action() {
    mount(MainLayout, {
      content: () => (<Thirties />),
    });
  },
});

practiceTools.route('/one-in-the-chamber', {
  action() {
    mount(MainLayout, {
      content: () => (<Comboizer />),
    });
  },
});

practiceTools.route('/timemachine-mirror', {
  action() {
    mount(MainLayout, {
      content: () => (<Timemachine />),
    });
  },
});


const battleTools = FlowRouter.group({
  prefix: '/battle-tools',
});

battleTools.route('/', {
  action() {
    mount(MainLayout, {
      content: () => (<BattleTools />),
    });
  },
});
battleTools.route('/battle-mode', {
  action() {
    mount(MainLayout, {
      content: () => (<BattleMode />),
    });
  },
});


Accounts.onLogin(() => {
  if (FlowRouter.current().path === '/') {
    FlowRouter.go('moves');
  }
});

Accounts.onLogout(() => {
  FlowRouter.go('home');
});
