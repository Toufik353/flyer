import React, { useState, useRef } from "react";
import Modal from "./Modal";
import productsData from "../data/products";
import ProductForm from "./ProductForm";
import styles from "../styles/Flyer.module.css"

const Flyer = () => {
  const [products, setProducts] = useState(productsData);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [flyerImage, setFlyerImage] = useState(null);
  const flyerRef = useRef(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFlyerImage(URL.createObjectURL(file));
    }
  };

  const handleFlyerClick = (event) => {
    if (!isEditing || !flyerRef.current) return;

    const rect = flyerRef.current.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    setProducts([...products, { id: Date.now(), name: "", price: "", description: "", position: { top: `${y}%`, left: `${x}%` } }]);
  };

  return (
    <div className="flyer-container">
      <h2>Interactive Clickable Flyer</h2>
      <label>
        Upload Flyer Image:
        <input type="file" accept="image/*" onChange={handleImageUpload} />
      </label>
      <button onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? "Switch to View Mode" : "Switch to Edit Mode"}
      </button>

      {flyerImage && (
        <div className="flyer-wrapper" ref={flyerRef} onClick={handleFlyerClick}>
          <img src={flyerImage} alt="Flyer" className="flyer" />
          {products.map((product) => (
            <div
              key={product.id}
              className="clickable-area"
              style={{ top: product.position.top, left: product.position.left }}
              onClick={() => setSelectedProduct(product)}
            />
          ))}
        </div>
      )}

      {selectedProduct && <Modal product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
      {isEditing && <ProductForm products={products} setProducts={setProducts} />}
    </div>
  );
};

export default Flyer;
