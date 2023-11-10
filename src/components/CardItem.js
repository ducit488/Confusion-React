import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

import LoadingComponent from "./LoadingComponent";

function CardItem({ item, dishesLoading, dishesError }) {
  if (dishesLoading || item == null) {
    return <LoadingComponent />;
  }

  if (dishesError) {
    return <h4>Error fetching data...</h4>;
  }

  return (
    <Card>
      <CardImg src={item.image} alt={item.name} />
      <CardBody>
        <CardTitle>{item.name}</CardTitle>
        {item.designation ? (
          <CardSubtitle>{item.designation}</CardSubtitle>
        ) : null}
        <CardText>{item.description}</CardText>
      </CardBody>
    </Card>
  );
}

export default CardItem;
