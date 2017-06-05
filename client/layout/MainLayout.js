import React from 'react';
import Header from './Header';

export const MainLayout = ({ content }) => (
  <div className="main-layout-wrapper">
    <div>
      <Header />
      <main className="main-layout">
        {content()}
      </main>
    </div>
    <footer className="site-footer">
      <h2 className="logo">Bboy Tools</h2>
    </footer>
  </div>
);
