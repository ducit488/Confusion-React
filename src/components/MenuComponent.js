import React, { useState } from "react";

import MenuList from "./MenuList";

import DishdetailComponent from "./DishdetailComponent";

function MenuComponent({ dishes }) {
  const [selectedDish, setSelectedDish] = useState(null);

  return (
    <div className="container">
      <div className="row">
        <MenuList dishes={dishes} setSelectedDish={setSelectedDish} />
      </div>
      <DishdetailComponent dish={selectedDish} />
    </div>
  );
}

export default MenuComponent;
