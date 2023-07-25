const ProductCard = ({ product, addToCart }) => {
  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="col-md-4">
      <div className="card">
        <img src={product.image} className="card-img-top" alt={product.name} />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.price}$</p>
          <button className="btn btn-success" onClick={handleAddToCart}>
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
