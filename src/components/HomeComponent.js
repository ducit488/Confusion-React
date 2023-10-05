import React from "react";
import CardItem from "./CardItem";

function HomeComponent({ dish, promotion, leader }) {
  return (
    <div className="container">
      <div className="row align-items-start">
        <div className="col-12 col-md m-1">
          <CardItem item={dish} />
        </div>
        <div className="col-12 col-md m-1">
          <CardItem item={promotion} />
        </div>
        <div className="col-12 col-md m-1">
          <CardItem item={leader} />
        </div>
      </div>
    </div>
  );
}

export default HomeComponent;
