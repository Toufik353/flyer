import React from "react";
import Modal from "react-modal";
import ProductCard from "./ProductCard";
import styles from "../styles/Modal.module.css"

Modal.setAppElement("#root");

const ProductModal = ({ product, onClose }) => {
  return (
    <Modal
      isOpen={!!product}
      onRequestClose={onClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <button className={styles.closeBtn} onClick={onClose}>×</button>
      <ProductCard product={product} />
    </Modal>
  );
};

export default ProductModal;
