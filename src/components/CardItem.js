import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

import LoadingComponent from "./LoadingComponent";
import { baseUrl } from "../shared/baseUrl";

function CardItem({
  item,
  dishesLoading,
  dishesError,
  promotionsLoading,
  promotionsError,
}) {
  if (dishesLoading || promotionsLoading || item == null) {
    return <LoadingComponent />;
  }

  if (dishesError || promotionsError) {
    return <h4>Error fetching data...</h4>;
  }

  return (
    <Card>
      <CardImg src={baseUrl + item.image} alt={item.name} />
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
