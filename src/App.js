import React, { Component } from "react";

import Toolbar from "./components/ToolBar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";

import UnderConstruction from "react-under-construction";
import "react-under-construction/build/css/index.css";

import TagManager from "react-gtm-module";
import sidedrawer from "./components/SideDrawer/SideDrawer";
import backdrop from "./components/Backdrop/Backdrop";

const tagManagerArgs = {
  gtmId: "GTM-5SDDQ4N"
};

TagManager.initialize(tagManagerArgs);

const app = document.getElementById("app");

class App extends Component {
  // state = {
  //   sideDrawerOpen: false
  // };

  // drawerToggleClickHandler = () => {
  //   this.setState(prevState => {
  //     return { sideDrawerOpen: !prevState.sideDrawerOpen };
  //   });
  // };

  // render() {
  //   let sideDrawer;
  //   let backdrop;

  //   if (this.state.sideDrawerOpen) {
  //     sideDrawer = <SideDrawer />;
  //   backdrop = <Backdrop click={this.backdropClickHandler} />;
  //   }
  render() {
    return (
      <div style={{ height: "100%" }}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer />
        <Backdrop />

        {/* {sideDrawer}
        {backdrop} */}

        <main style={{ marginTop: "64px" }}>
          <p>Page Content</p>
        </main>
      </div>
    );
  }
}

export default App;
