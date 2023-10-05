import { CardImgOverlay, CardTitle, CardImg, Card } from "reactstrap";

function MenuList({ dishes, setSelectedDish }) {
  return dishes.map((dish) => (
    <div key={dish.id} className="col-12 col-md-5 m-1">
      <Card
        onClick={() => {
          setSelectedDish(dish);
        }}
      >
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardImgOverlay>
          <CardTitle>{dish.name}</CardTitle>
        </CardImgOverlay>
      </Card>
    </div>
  ));
}

export default MenuList;
