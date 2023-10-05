import React, { useState } from "react";

import MenuList from "./MenuList";
import MenuItem from "./MenuItem";

function MenuComponent({ dishes }) {
  const [selectedDish, setSelectedDish] = useState(null);

  return (
    <div className="container">
      <div className="row">
        <MenuList dishes={dishes} setSelectedDish={setSelectedDish} />
      </div>
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <MenuItem dish={selectedDish} />
        </div>
      </div>
    </div>
  );
}

export default MenuComponent;
