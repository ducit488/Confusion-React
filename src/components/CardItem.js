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
import { FadeTransform } from "react-animation-components";

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
    <FadeTransform
      in
      transformProps={{
        exitTransform: "scale(0.5) translateY(-50%)",
      }}
    >
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
    </FadeTransform>
  );
}

export default CardItem;
