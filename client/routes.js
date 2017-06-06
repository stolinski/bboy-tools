import React from 'react';
import { mount } from 'react-mounter';

import { HomeLayout } from './layout/HomeLayout';
import { MainLayout } from './layout/MainLayout';
import Home from './layout/Home';
import MyMoves from './moves/MyMoves';
// Practice Tools
import PracticeTools from './tools/PracticeTools';
import Thirties from './tools/Thirties';
import Comboizer from './tools/Comboizer';
import Timemachine from './tools/Timemachine';
// Battle Tools
import BattleTools from './tools/BattleTools';
import BattleMode from './tools/BattleMode';

import { toggleNav, closeNav, closeAccounts,
 } from './actions';


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
      content: () => (<MyMoves />),
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
    closeNav();
    closeAccounts();
    FlowRouter.go('moves');
  }
});

Accounts.onLogout(() => {
  closeNav();
  closeAccounts();
  FlowRouter.go('home');
});
