import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";

import MenuComponent from "./MenuComponent";
import ContactComponent from "./ContactComponent";
import AboutComponent from "./AboutComponent";

import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";

import HomeComponent from "./HomeComponent";
import DishdetailComponent from "./DishdetailComponent";
import { useSelector } from "react-redux";
import { useEffect } from "react";

import { fetchDishes } from "../store";

function MainComponent() {
  const { dishes, comments, promotions, leaders } = useSelector((state) => {
    return state.mixedDatas;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDishes());
  }, [dispatch]);

  const { dishesLoading, dishesData, dishesError } = useSelector((state) => {
    return state.dishes;
  });

  return (
    <div>
      <HeaderComponent />
      <div>
        <Switch>
          <Route
            path="/home"
            component={() => (
              <HomeComponent
                dish={dishesData.filter((dish) => dish.featured)[0]}
                dishesLoading={dishesLoading}
                dishesError={dishesError}
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
            component={() => (
              <MenuComponent
                dishes={dishesData}
                dishesLoading={dishesLoading}
                dishesError={dishesError}
              />
            )}
          />
          <Route
            exact
            path="/menu/:dishId"
            render={({ match }) => (
              <DishdetailComponent
                dish={
                  dishesData.filter(
                    (dish) => dish.id === parseInt(match.params.dishId, 10)
                  )[0]
                }
                dishesLoading={dishesLoading}
                dishesError={dishesError}
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
