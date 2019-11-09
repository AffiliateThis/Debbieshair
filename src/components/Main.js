import React from "react";
import { Switch, Route } from "react-router-dom";

import About from "../components/Pages/About";
import Contact from "../components/Pages/Contact";
import Landingpage from "../components/Pages/Landingpage";
import Location from "../components/Pages/Location";
import Meettheteam from "../components/Pages/Meettheteam";
import Services from "../components/Pages/Services";

const Main = () => (
  <Switch>
    <Route exact path="/" component={Landingpage} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    <Route path="/location" component={Location} />
    <Route path="/meettheteam" component={Meettheteam} />
    <Route path="/services" component={Services} />
  </Switch>
);

export default Main;
