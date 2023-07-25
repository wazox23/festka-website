import React from "react";
import "../Styles/Nav.css";
import { Link } from "react-router-dom";
import Cart from "../components/Cart";
import { useState } from "react";
import { Offcanvas, Navbar, Nav } from "react-bootstrap";

function Navigation({ cart, addToCart, removeFromCart, decreaseQuantity }) {
  const [showCart, setShowCart] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleCartToggle = () => {
    setShowCart((prevState) => !prevState);
  };

  const handleCartClose = () => {
    setShowCart(false);
  };

  const handleNavToggle = () => {
    setExpanded((prevState) => !prevState);
  };

  const closeNav = () => {
    setExpanded(false);
  };

  return (
    <div>
      <Navbar
        expand="lg"
        expanded={expanded}
        className="navbar-shadow fixed-top bg-white"
      >
        <div className="container-fluid">
          <img
            src="//festka.com/cdn/shop/files/logo-01-BW_150x.png?v=1644413091"
            alt="Festka"
          />
          <Navbar.Toggle aria-controls="navbarNav" onClick={handleNavToggle} />
          <Navbar.Collapse id="navbarNav">
            <Nav className="mr-auto text-uppercase text-center">
              <Nav.Link as={Link} to="/homepage" onClick={closeNav}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/models" onClick={closeNav}>
                Models
              </Nav.Link>
              <Nav.Link as={Link} to="/limited" onClick={closeNav}>
                Limited Editions
              </Nav.Link>
              <Nav.Link as={Link} to="/store" onClick={closeNav}>
                Store
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <div className="d-flex justify-content-center align-items-center">
            <i
              className="fa-solid fa-cart-shopping text-secondary fs-2"
              onClick={handleCartToggle}
              style={{ cursor: "pointer" }}
            ></i>
          </div>
        </div>
      </Navbar>
      <Offcanvas
        placement="end"
        show={showCart}
        onHide={handleCartClose}
        id="offcanvasCart"
        aria-labelledby="offcanvasCartLabel"
      >
        <Cart
          cart={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          handleCartClose={handleCartClose}
          decreaseQuantity={decreaseQuantity}
        />
      </Offcanvas>
    </div>
  );
}

export default Navigation;
