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
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

import {
  fetchDishes,
  fetchComments,
  fetchPromotions,
  addComment,
} from "../store";
import { actions } from "react-redux-form";
import { TransitionGroup, CSSTransition } from "react-transition-group";

function MainComponent() {
  const { leaders } = useSelector((state) => {
    return state.mixedDatas;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDishes());
    dispatch(fetchComments());
    dispatch(fetchPromotions());
  }, [dispatch]);

  const { dishesLoading, dishesData, dishesError } = useSelector((state) => {
    return state.dishes;
  });

  const { commentsLoading, commentsData, commentsError } = useSelector(
    (state) => {
      return state.comments;
    }
  );

  const { promotionsLoading, promotionsData, promotionsError } = useSelector(
    (state) => {
      return state.promotions;
    }
  );

  const resetFeedbackForm = () => {
    dispatch(actions.reset("feedback"));
  };
  const location = useLocation();

  return (
    <div>
      <HeaderComponent />
      <div>
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="page" timeout={300}>
            <Switch location={location}>
              <Route
                path="/home"
                component={() => (
                  <HomeComponent
                    dish={dishesData.filter((dish) => dish.featured)[0]}
                    dishesLoading={dishesLoading}
                    dishesError={dishesError}
                    promotion={
                      promotionsData.filter((promo) => promo.featured)[0]
                    }
                    promotionsLoading={promotionsLoading}
                    promotionsError={promotionsError}
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
                    comments={commentsData?.filter(
                      (comment) =>
                        comment.dishId === parseInt(match.params.dishId, 10)
                    )}
                    commentsLoading={commentsLoading}
                    commentsError={commentsError}
                    addComment={addComment}
                    commentsLen={commentsData.length}
                  />
                )}
              />

              <Route
                exact
                path="/contactus"
                component={() => (
                  <ContactComponent resetFeedbackForm={resetFeedbackForm} />
                )}
              />
              <Redirect to="/home" />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
      <FooterComponent />
    </div>
  );
}

export default MainComponent;
