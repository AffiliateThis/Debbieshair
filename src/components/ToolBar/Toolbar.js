import React, { Component } from "react";

import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import "./Toolbar.css";

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar_navigation">
      <div>
        <DrawerToggleButton click={props.DrawerClickHandler} />
      </div>
      <div className="toolbar_logo">
        <a href="/">LOGO</a>
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
        <ul>
          <li>
            <a href="/">ABOUT</a>
          </li>
          <li>
            <a href="/">SERVICES</a>
          </li>
          <li>
            <a href="/">MEET THE TEAM</a>
          </li>
          <li>
            <a href="/">LOCATION</a>
          </li>
          <li>
            <a href="/">CONTACT US</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;
