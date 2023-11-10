import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import MenuCommentsItem from "./MenuCommentsItem";
import MenuDetailedItem from "./MenuDetailedItem";
import LoadingComponent from "./LoadingComponent";

import { Link } from "react-router-dom";

function DishdetailComponent({ dish, comments, dishesLoading, dishesError }) {
  if (dishesLoading || dish == null) {
    return (
      <div className="container">
        <div className="row">
          <LoadingComponent />
        </div>
      </div>
    );
  }

  if (dishesError) {
    return (
      <div className="container">
        <div className="row">
          <h4>Error fetching data...</h4>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/menu">Menu</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>{dish.name}</h3>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <MenuDetailedItem dish={dish} />
        </div>
        <div className="col-12 col-md-5 m-1">
          <h4>Comments</h4>
          <MenuCommentsItem comments={comments} dishId={dish.id} />
        </div>
      </div>
    </div>
  );
}

export default DishdetailComponent;
