import React from "react";
import { Button, Table, Offcanvas } from "react-bootstrap";

const Cart = ({
  cart,
  addToCart,
  decreaseQuantity,
  removeFromCart,
  handleCartClose,
}) => {
  console.log(typeof decreaseQuantity);

  return (
    <Offcanvas
      placement="end"
      show={true}
      onHide={handleCartClose}
      id="offcanvasCart"
      aria-labelledby="offcanvasCartLabel"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasCartLabel">CART</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {cart &&
                cart.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.price} $</td>
                    <td>
                      <Button
                        variant="outline-primary"
                        onClick={() => decreaseQuantity(item)}
                      >
                        -
                      </Button>{" "}
                      {item.quantity}{" "}
                      <Button
                        variant="outline-primary"
                        onClick={() => addToCart(item)}
                      >
                        +
                      </Button>
                    </td>
                    <td>
                      <Button
                        variant="danger"
                        onClick={() => removeFromCart(item.id)}
                      >
                        DELETE
                      </Button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
          <div></div>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Cart;
