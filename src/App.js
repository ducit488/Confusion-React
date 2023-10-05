import { Navbar, NavbarBrand } from "reactstrap";
import MenuComponent from "./components/MenuComponent";

import { DISHES } from "./shared/dishes";

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <MenuComponent dishes={DISHES} />
    </div>
  );
}

export default App;
