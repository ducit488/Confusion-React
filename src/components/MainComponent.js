import React from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import MenuComponent from "./MenuComponent";
import ContactComponent from "./ContactComponent";
import AboutComponent from "./AboutComponent";

import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";

import { DISHES as dishes } from "../shared/dishes";
import { COMMENTS as comments } from "../shared/comments";
import { PROMOTIONS as promotions } from "../shared/promotions";
import { LEADERS as leaders } from "../shared/leaders";

import HomeComponent from "./HomeComponent";
import DishdetailComponent from "./DishdetailComponent";

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
  };
};

function MainComponent() {
  return (
    <div>
      <HeaderComponent />
      <div>
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
            path="/aboutus"
            component={() => <AboutComponent leaders={leaders} />}
          />
          <Route
            exact
            path="/menu"
            component={() => <MenuComponent dishes={dishes} />}
          />
          <Route
            exact
            path="/menu/:dishId"
            render={({ match }) => (
              <DishdetailComponent
                dish={
                  dishes.filter(
                    (dish) => dish.id === parseInt(match.params.dishId, 10)
                  )[0]
                }
                comments={comments.filter(
                  (comment) =>
                    comment.dishId === parseInt(match.params.dishId, 10)
                )}
              />
            )}
          />

          <Route exact path="/contactus" component={ContactComponent} />
          <Redirect to="/home" />
        </Switch>
      </div>
      <FooterComponent />
    </div>
  );
}

// export default withRouter(
//   connect({
//     dishes: dishes,
//     comments: comments,
//     promotions: promotions,
//     leaders: leaders,
//   })(MainComponent)
// );
export default MainComponent;
