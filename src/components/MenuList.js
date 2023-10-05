import MenuItem from "./MenuItem";

function MenuList({ dishes }) {
  return dishes.map((dish) => (
    <div key={dish.id} className="col-12 col-md-5 m-1">
      <MenuItem dish={dish} />
    </div>
  ));
}

export default MenuList;
