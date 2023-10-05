import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import MenuCommentsItem from "./MenuCommentsItem";
import MenuDetailedItem from "./MenuDetailedItem";

import { Link } from "react-router-dom";

function DishdetailComponent({ dish, comments }) {
  if (dish == null) return <div></div>;

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
          <MenuCommentsItem comments={comments} />
        </div>
      </div>
    </div>
  );
}

export default DishdetailComponent;
