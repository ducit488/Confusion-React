import React from "react";

import MenuList from "./MenuList";

function MenuComponent({ dishes }) {
  return (
    <div className="container">
      <div className="row">
        <MenuList dishes={dishes} />
      </div>
    </div>
  );
}

export default MenuComponent;
