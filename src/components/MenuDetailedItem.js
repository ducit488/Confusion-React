import { CardTitle, CardImg, Card, CardBody, CardText } from "reactstrap";
import { baseUrl } from "../shared/baseUrl";

function MenuDetailedItem({ dish }) {
  return (
    <Card>
      <CardImg top src={baseUrl + dish.image} alt={dish.name} />
      <CardBody>
        <CardTitle tag="h5">{dish.name}</CardTitle>
        <CardText>{dish.description}</CardText>
      </CardBody>
    </Card>
  );
}

export default MenuDetailedItem;
