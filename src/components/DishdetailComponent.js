import MenuItem from "./MenuItem";

function DishdetailComponent({ dish }) {
  if (dish == null) return <div></div>;
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  return (
    <div className="row">
      <div className="col-12 col-md-5 m-1">
        <MenuItem dish={dish} />
      </div>
      <div className="col-12 col-md-5 m-1">
        <h4>Comments</h4>
        {dish != null ? (
          <ul className="list-unstyled">
            {dish.comments.map((item) => (
              <li key={item.id}>
                <p>{item.comment}</p>
                <p>
                  -- {item.author},{" "}
                  {new Date(item.date).toLocaleDateString("en-US", options)}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default DishdetailComponent;
