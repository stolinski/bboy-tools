import React from 'react';
import { Redirect } from 'react-router-dom';

import Home from './Home';


const HomeLayout = ({ userSub, user }) => {
  if (userSub && user) return <Redirect to={{ pathname: '/moves' }} />;
  return (
    <div>
      <img src="/img/tom.jpg" className="billboard" />
      <Home />
    </div>
  );
};

export default HomeLayout;
