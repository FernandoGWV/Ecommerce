import React from "react";

import InfoProduto from "./InfoProduto.js";
import styles from "./StylesComponents/Produto.module.css";
import Product1 from "../Assets/image-product-1.jpg";
import Product2 from "../Assets/image-product-2.jpg";
import Product3 from "../Assets/image-product-3.jpg";
import Product4 from "../Assets/image-product-4.jpg";
import Product1Thumb from "../Assets/image-product-1-thumbnail.jpg";
import Product2Thumb from "../Assets/image-product-2-thumbnail.jpg";
import Product3Thumb from "../Assets/image-product-3-thumbnail.jpg";
import Product4Thumb from "../Assets/image-product-4-thumbnail.jpg";
import ModalProduto from "./ModalProduto";
const Produto = () => {
  const [modal, setModal] = React.useState(null);
  const [product, setProduct] = React.useState(Product1);
  const img = React.useRef(Product1);
  return (
    <>
      <div className={styles.ArtgProduto}>
        <div>
          <div className={`${styles.content}`}>
            <img
              src={product}
              id="Produto1"
              alt="Produto 1"
              onClick={() => setModal(true)}
            />
          </div>
          <ul>
            <li>
              <img
                src={Product1Thumb}
                onClick={() => setProduct(Product1)}
                id="Produto1"
                alt="Produto thumbanil 1"
              />
            </li>
            <li>
              <img
                src={Product2Thumb}
                onClick={() => setProduct(Product2)}
                alt="Produto thumbnail 2"
              />
            </li>
            <li>
              <img
                src={Product3Thumb}
                onClick={() => setProduct(Product3)}
                alt="Produto thumbnail 3"
              />
            </li>
            <li>
              <img
                src={Product4Thumb}
                onClick={() => setProduct(Product4)}
                alt="Produto thumbnail 4"
              />
            </li>
          </ul>
        </div>
        <InfoProduto img={img} />
      </div>
      <div>
        {modal && <ModalProduto produto={modal} setProduto={setModal} />}
      </div>
    </>
  );
};

export default Produto;
