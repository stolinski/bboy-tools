import React from 'react';
import Header from './Header';
import Home from './Home';


export const HomeLayout = ({ content }) => (
  <div>
    <div>
      <Header />
      <img src="/img/tom.jpg" className="billboard" />
      <main className="">
        <Home />
      </main>
    </div>
    <footer className="site-footer">
      Bboy Tools © 2017
    </footer>
  </div>
);
