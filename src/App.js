import React, { Component } from "react";

import Toolbar from "./components/ToolBar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";

import UnderConstruction from "react-under-construction";
import "react-under-construction/build/css/index.css";

import TagManager from "react-gtm-module";

const tagManagerArgs = {
  gtmId: "GTM-5SDDQ4N"
};

TagManager.initialize(tagManagerArgs);

const app = document.getElementById("app");

class App extends Component {
  render() {
    return (
      <div style={{ height: "100%" }}>
        <Toolbar />
        <SideDrawer />
        <div></div>
        <Backdrop />
        <main style={{ marginTop: "60px" }}>
          <p>Page Content</p>
        </main>
      </div>
    );
  }
}

export default App;
