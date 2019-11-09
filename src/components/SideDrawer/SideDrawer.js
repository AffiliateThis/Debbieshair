import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import "./SideDrawer.css";

const sideDrawer = props => (
  <nav className="side-drawer">
    <ul>
      <li>
      <Link to="/about">ABOUT</Link>
      </li>
      <li>
        <a href="/">ABOUT</a>
      </li>
      <li>
        <a href="/">ABOUT</a>
      </li>
      <li>
        <a href="/">ABOUT</a>
      </li>
      <li>
        <a href="/">ABOUT</a>
      </li>
    </ul>
  </nav>
);

export default sideDrawer;
