import MenuCommentsItem from "./MenuCommentsItem";
import MenuDetailedItem from "./MenuDetailedItem";

function DishdetailComponent({ dish }) {
  if (dish == null) return <div></div>;

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <MenuDetailedItem dish={dish} />
        </div>
        <div className="col-12 col-md-5 m-1">
          <h4>Comments</h4>
          <MenuCommentsItem comments={dish.comments} />
        </div>
      </div>
    </div>
  );
}

export default DishdetailComponent;
