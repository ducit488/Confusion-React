import { CardTitle, CardImg, Card, CardImgOverlay } from "reactstrap";

function MenuItem({ dish }) {
  if (dish == null) return <div></div>;

  return (
    <Card>
      <CardImg width="100%" src={dish.image} alt={dish.name} />
      <CardImgOverlay>
        <CardTitle tag="h5">{dish.name}</CardTitle>
      </CardImgOverlay>
    </Card>
  );
}

export default MenuItem;
