import React from "react";

import InfoProduto from "./InfoProduto.js";
import styles from "./StylesComponents/Produto.module.css";
import Product from "../Assets/image-product-1.jpg";
import Product1Thumb from "../Assets/image-product-1-thumbnail.jpg";
import Product2Thumb from "../Assets/image-product-2-thumbnail.jpg";
import Product3Thumb from "../Assets/image-product-3-thumbnail.jpg";
import Product4Thumb from "../Assets/image-product-4-thumbnail.jpg";
const Produto = () => {
  return (
    <div className={styles.ArtgProduto}>
      <div>
        <div className={`${styles.content} content`}>
          <img src={Product} alt="Produto 1" />
        </div>
        <ul>
          <li>
            <img src={Product1Thumb} alt="Produto thumbanil 1" />
          </li>
          <li>
            <img src={Product2Thumb} alt="Produto thumbnail 2" />
          </li>
          <li>
            <img src={Product3Thumb} alt="Produto thumbnail 3" />
          </li>
          <li>
            <img src={Product4Thumb} alt="Produto thumbnail 4" />
          </li>
        </ul>
      </div>
      <InfoProduto />
    </div>
  );
};

export default Produto;
