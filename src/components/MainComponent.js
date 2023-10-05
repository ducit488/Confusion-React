import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import MenuComponent from "./MenuComponent";

import { DISHES as dishes } from "../shared/dishes";

import HomeComponent from "./HomeComponent";

function MainComponent() {
  return (
    <Switch>
      <Route path="/home" component={HomeComponent} />
      <Route
        exact
        path="/menu"
        component={() => <MenuComponent dishes={dishes} />}
      />
      <Redirect to="/home" />
    </Switch>
  );
}

export default MainComponent;
