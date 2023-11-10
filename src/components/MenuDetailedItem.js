import { CardTitle, CardImg, Card, CardBody, CardText } from "reactstrap";

function MenuDetailedItem({ dish }) {
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
