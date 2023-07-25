import "./App.css";
import Nav from "./components/Nav";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from "./components/Pages/HomePage";
import Store from "./components/Pages/Store";
import Models from "./components/Pages/Models";
import Limited from "./components/Pages/Limited";
import { useState } from "react";
import Cart from "../src/components/Cart";
import DATA from "./data";

function App() {
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);

      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };
  const decreaseQuantity = (productToDecrease) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(
        (item) => item.id === productToDecrease.id
      );

      if (existingProduct) {
        if (existingProduct.quantity === 1) {
          return prevCart.filter((item) => item.id !== productToDecrease.id);
        } else {
          return prevCart.map((item) =>
            item.id === productToDecrease.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          );
        }
      } else {
        return prevCart;
      }
    });
  };

  console.log(typeof decreaseQuantity);
  return (
    <div className="container">
      <Router basename={process.env.PUBLIC_URL}>
        <Nav
          cart={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          decreaseQuantity={decreaseQuantity}
        />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="homepage" element={<HomePage />} />
          <Route path="store" element={<Store addToCart={addToCart} />} />
          <Route path="models" element={<Models />} />
          <Route path="limited" element={<Limited />} />
          <Route
            path="cart"
            element={
              <Cart
                cart={cart}
                removeFromCart={removeFromCart}
                addToCart={addToCart}
                decreaseQuantity={decreaseQuantity}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
