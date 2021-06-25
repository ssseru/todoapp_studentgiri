import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "./HomeComponent";
import Addtask from "./AddtaskComponent";
import Navbar from "./NavbarComponent";

import "../App.css";

export default function Main() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route path="/addtask" component={Addtask} />
        <Redirect to="/home" />
      </Switch>
      {/* <Footer /> */}
    </div>
  );
}
