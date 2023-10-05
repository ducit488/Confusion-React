import React, { useState } from "react";
import { Navbar, NavbarBrand } from "reactstrap";

import MenuComponent from "./MenuComponent";
import DishdetailComponent from "./DishdetailComponent";
import { DISHES as dishes } from "../shared/dishes";

function MainComponent() {
  const [selectedDish, setSelectedDish] = useState(null);

  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <MenuComponent
        dishes={dishes}
        onClick={(dishId) => setSelectedDish(dishId)}
      />
      <DishdetailComponent
        dish={dishes.filter((dish) => dish.id === selectedDish)[0]}
      />
    </div>
  );
}

export default MainComponent;
