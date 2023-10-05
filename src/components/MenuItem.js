import { CardTitle, CardImg, Card, CardImgOverlay } from "reactstrap";

import { Link } from "react-router-dom";

function MenuItem({ dish }) {
  if (dish == null) return <div></div>;

  return (
    <Card>
      <Link to={`/menu/${dish.id}`}>
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardImgOverlay>
          <CardTitle tag="h5">{dish.name}</CardTitle>
        </CardImgOverlay>
      </Link>
    </Card>
  );
}

export default MenuItem;
