import React, { useState } from "react";
import Modal from "./Modal";
import products from "../data/products";
import flyerImage from "../assets/flyer.jpg";

const Flyer = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="flyer-container">
      <img src={flyerImage} alt="Flyer" className="flyer" />
      {products.map((product) => (
        <div
          key={product.id}
          className="clickable-area"
          style={{ top: product.position.top, left: product.position.left }}
          onClick={() => setSelectedProduct(product)}
        />
      ))}
      {selectedProduct && <Modal product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
    </div>
  );
};

export default Flyer;

