import React from 'react';
import {mount} from 'react-mounter';

import {HomeLayout} from './layout/HomeLayout.jsx';
import {MainLayout} from './layout/MainLayout.jsx';
import Home from './layout/Home.jsx';
import App from './moves/App.jsx';
import PracticeTools from './tools/PracticeTools.jsx';
import Thirties from './tools/Thirties.jsx';
import BattleMode from './tools/BattleMode.jsx';

FlowRouter.route('/', {
    name: 'home',
    action() {
        if (Meteor.userId()) {FlowRouter.go('moves');}
        mount(HomeLayout, {
            content: () => (<Home />)
        });
    }
});

FlowRouter.route('/moves', {
    name: 'moves',
    action() {
        if (!Meteor.userId()) {FlowRouter.go('home');}
        mount(MainLayout, {
            content: () => (<App />)
        });
    }
});

const practiceTools = FlowRouter.group({
    prefix: '/practice-tools'
});

practiceTools.route('/', {
    action() {
        mount(MainLayout, {
            content: () => (<PracticeTools />)
        });
    }
});

practiceTools.route('/thirties', {
    action() {
        mount(MainLayout, {
            content: () => (<Thirties />)
        });
    }
});

practiceTools.route('/one-in-the-chamber', {
    action() {
        mount(MainLayout, {
            content: () => (<Thirties />)
        });
    }
});


const battleTools = FlowRouter.group({
    prefix: '/battle-tools'
});

battleTools.route('/', {
    action() {
        mount(MainLayout, {
            content: () => (<BattleTools />)
        });
    }
});
battleTools.route('/battle-mode', {
    action() {
        mount(MainLayout, {
            content: () => (<BattleMode />)
        });
    }
});
