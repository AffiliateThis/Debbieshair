import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";

import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import "./Toolbar.css";

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar_navigation">
      <div>
        <DrawerToggleButton click={props.DrawerClickHandler} />
      </div>
      <div>
        <Link className="toolbar_logo" to="/">
          LOGO
        </Link>
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
        <ul>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/services">SERVICES</Link>
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
