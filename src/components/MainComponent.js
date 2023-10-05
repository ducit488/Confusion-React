import React, { useState } from "react";

import MenuComponent from "./MenuComponent";
import DishdetailComponent from "./DishdetailComponent";
import { DISHES as dishes } from "../shared/dishes";

import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";

function MainComponent() {
  const [selectedDish, setSelectedDish] = useState(null);

  return (
    <div>
      <HeaderComponent />
      <MenuComponent
        dishes={dishes}
        onClick={(dishId) => setSelectedDish(dishId)}
      />
      <DishdetailComponent
        dish={dishes.filter((dish) => dish.id === selectedDish)[0]}
      />
      <FooterComponent />
    </div>
  );
}

export default MainComponent;
