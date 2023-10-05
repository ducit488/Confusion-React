import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import MenuComponent from "./MenuComponent";
import ContactComponent from "./ContactComponent";

import { DISHES as dishes } from "../shared/dishes";
import { COMMENTS as comments } from "../shared/comments";
import { PROMOTIONS as promotions } from "../shared/promotions";
import { LEADERS as leaders } from "../shared/leaders";

import HomeComponent from "./HomeComponent";

function MainComponent() {
  return (
    <Switch>
      <Route
        path="/home"
        component={() => (
          <HomeComponent
            dish={dishes.filter((dish) => dish.featured)[0]}
            promotion={promotions.filter((promo) => promo.featured)[0]}
            leader={leaders.filter((leader) => leader.featured)[0]}
          />
        )}
      />
      <Route
        exact
        path="/menu"
        component={() => <MenuComponent dishes={dishes} />}
      />
      <Route exact path="/contactus" component={ContactComponent} />
      <Redirect to="/home" />
    </Switch>
  );
}

export default MainComponent;
