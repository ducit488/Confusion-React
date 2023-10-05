import { CardTitle, CardImg, Card, CardImgOverlay } from "reactstrap";

function MenuItem({ dish, onClick }) {
  if (dish == null) return <div></div>;

  return (
    <Card
      onClick={() => {
        onClick(dish.id);
      }}
    >
      <CardImg width="100%" src={dish.image} alt={dish.name} />
      <CardImgOverlay>
        <CardTitle tag="h5">{dish.name}</CardTitle>
      </CardImgOverlay>
    </Card>
  );
}

export default MenuItem;
