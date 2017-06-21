import React from 'react';
import { Redirect } from 'react-router-dom';

import Home from './Home';


const HomeLayout = ({ userSub, user }) => {
  if (userSub && user) return <Redirect to={{ pathname: '/moves' }} />;
  return (
    <main className="home-layout">
      <Home />
    </main>
  );
};

export default HomeLayout;
