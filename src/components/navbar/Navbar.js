import React from "react";
import MainNav from "./mainNav/MainNav";
import SideDrawer from "./sideDrawer/SideDrawer";

const Navbar = ({ loggedIn, emailVerified }) => {
  return (
    <div>
      <MainNav loggedIn={loggedIn} emailVerified={emailVerified} />
      <SideDrawer loggedIn={loggedIn} emailVerified={emailVerified} />
    </div>
  );
};

export default Navbar;
