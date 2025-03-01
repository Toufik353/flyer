import React, { useState } from "react";

const ProductForm = ({ products, setProducts }) => {
  const [currentProduct, setCurrentProduct] = useState(null);

  const handleChange = (e) => {
    setCurrentProduct({ ...currentProduct, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setProducts(products.map((p) => (p.id === currentProduct.id ? currentProduct : p)));
    setCurrentProduct(null);
  };

  return (
    <div className="product-form">
      <h3>Edit Product Details</h3>
      {products.map((product) => (
        <div key={product.id}>
          <input type="text" name="name" placeholder="Product Name" value={product.name} onChange={handleChange} />
          <input type="text" name="price" placeholder="Price" value={product.price} onChange={handleChange} />
          <textarea name="description" placeholder="Description" value={product.description} onChange={handleChange} />
          <button onClick={handleSave}>Save</button>
        </div>
      ))}
    </div>
  );
};

export default ProductForm;
