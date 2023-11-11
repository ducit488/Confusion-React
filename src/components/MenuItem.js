import { CardTitle, CardImg, Card, CardImgOverlay } from "reactstrap";

import { Link } from "react-router-dom";
import { baseUrl } from "../shared/baseUrl";

function MenuItem({ dish }) {
  if (dish == null) return <div></div>;

  return (
    <Card>
      <Link to={`/menu/${dish.id}`}>
        <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
        <CardImgOverlay>
          <CardTitle tag="h5">{dish.name}</CardTitle>
        </CardImgOverlay>
      </Link>
    </Card>
  );
}

export default MenuItem;
