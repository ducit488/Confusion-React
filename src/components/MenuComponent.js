import React from "react";

import MenuList from "./MenuList";

function MenuComponent({ dishes, onClick }) {
  return (
    <div className="container">
      <div className="row">
        <MenuList dishes={dishes} onClick={onClick} />
      </div>
    </div>
  );
}

export default MenuComponent;
