import React from "react";
import { Redirect } from "react-router-dom";

import Home from "./Home";

const HomeLayout = ({ user }) => {
  if (user._id) return <Redirect to={{ pathname: "/moves" }} />;
  return (
    <main className="home-layout">
      <Home />
    </main>
  );
};

export default HomeLayout;
