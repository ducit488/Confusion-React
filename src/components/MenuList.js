import { CardImgOverlay, CardTitle, CardImg, Card } from "reactstrap";

function MenuList({ dishes, onClick }) {
  return dishes.map((dish) => (
    <div key={dish.id} className="col-12 col-md-5 m-1">
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
    </div>
  ));
}

export default MenuList;
