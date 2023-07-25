import React from "react";
import DATA from "../../data";
import ProductCard from "../../components/ProductCard";
import Cart from "../../components/Cart";
import "../../Styles/Store.css";
import Footer from "../Footer";

function Store({ addToCart, cart, removeFromCart }) {
  return (
    <div className="container pt-5">
      <div className="row d-flex g-3 pt-5">
        {DATA.products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Store;
