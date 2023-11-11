import React from "react";
import CardItem from "./CardItem";

function HomeComponent({
  dish,
  promotion,
  leader,
  dishesLoading,
  dishesError,
  promotionsLoading,
  promotionsError,
  leadersLoading,
  leadersError,
}) {
  return (
    <div className="container">
      <div className="row align-items-start">
        <div className="col-12 col-md m-1">
          <CardItem
            item={dish}
            dishesLoading={dishesLoading}
            dishesError={dishesError}
          />
        </div>
        <div className="col-12 col-md m-1">
          <CardItem
            item={promotion}
            promotionsLoading={promotionsLoading}
            promotionsError={promotionsError}
          />
        </div>
        <div className="col-12 col-md m-1">
          <CardItem
            item={leader}
            leadersLoading={leadersLoading}
            leadersError={leadersError}
          />
        </div>
      </div>
    </div>
  );
}

export default HomeComponent;
