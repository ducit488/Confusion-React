import { CardTitle, CardImg, Card, CardBody, CardText } from "reactstrap";

function MenuDetailedItem({ dish }) {
  if (dish == null) return <div></div>;

  return (
    <Card>
      <CardImg top src={dish.image} alt={dish.name} />
      <CardBody>
        <CardTitle tag="h5">{dish.name}</CardTitle>
        <CardText>{dish.description}</CardText>
      </CardBody>
    </Card>
  );
}

export default MenuDetailedItem;
