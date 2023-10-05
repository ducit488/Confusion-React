import React, { Fragment } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Jumbotron from "../custom-components/Jumbotron";

function HeaderComponent() {
  return (
    <Fragment>
      <Navbar dark className="navbar-dark">
        <div className="container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Jumbotron className="jumbotron">
        <div className="container">
          <div className="row row-header">
            <div className="col-12 col-sm-6">
              <h1>Ristorante Con Fusion</h1>
              <p>
                We take inspiration from the World's best cuisines, and create a
                unique fusion experience. Our lipsmacking creations will tickle
                your culinary senses!
              </p>
            </div>
          </div>
        </div>
      </Jumbotron>
    </Fragment>
  );
}

export default HeaderComponent;
