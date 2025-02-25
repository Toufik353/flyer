import React from "react";
import useUnsplash from "../hooks/useUnsplash";
import styles from "../styles/ProductCard.module.css";

const ProductCard = ({ product }) => {
    const productImage = useUnsplash(product.name);

  return (
    <div className={styles.productCard}>
      <img src={productImage} alt={product.name} className={styles.productImg} />
      <div className={styles.productDetails}>
        <h2 className={styles.productName}>{product.name}</h2>
        <p className={styles.productPrice}>${product.price}</p>
        <p className={styles.productDescription}>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
