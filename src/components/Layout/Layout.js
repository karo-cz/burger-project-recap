import React, { Fragment, useState } from "react";
import classes from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

const Layout = props => {
  const [sideDrawerState, setSideDrawerState] = useState(false);

  const sideDrawerHandler = () => {
    setSideDrawerState(!sideDrawerState);
  };

  return (
    <Fragment>
      <Toolbar sideDrawer={sideDrawerHandler} />
      <SideDrawer open={sideDrawerState} closed={sideDrawerHandler} />
      <main className={classes.Content}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
