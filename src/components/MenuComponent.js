import React from "react";

import MenuList from "./MenuList";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import LoadingComponent from "./LoadingComponent";

function MenuComponent({ dishes, dishesLoading, dishesError }) {
  if (dishesLoading || dishes == null) {
    return <LoadingComponent />;
  }
  if (dishesError) {
    return <h4>Error fetching data...</h4>;
  }
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Menu</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>Menu</h3>
          <hr />
        </div>
      </div>
      <div className="row">
        <MenuList dishes={dishes} />
      </div>
    </div>
  );
}

export default MenuComponent;
