import React from "react";
import styles from "./StylesComponents/ModalProduto.module.css";
import Product1 from "../Assets/image-product-1.jpg";
import Product2 from "../Assets/image-product-2.jpg";
import Product3 from "../Assets/image-product-3.jpg";
import Product4 from "../Assets/image-product-4.jpg";
import Product1Thumb from "../Assets/image-product-1-thumbnail.jpg";
import Product2Thumb from "../Assets/image-product-2-thumbnail.jpg";
import Product3Thumb from "../Assets/image-product-3-thumbnail.jpg";
import Product4Thumb from "../Assets/image-product-4-thumbnail.jpg";

const Produtos = ({ produto, setProduto }) => {
  const [product, setProduct] = React.useState(Product1);
  const [contar, setContar] = React.useState(0);
  const [modal, setModal] = React.useState(null);

  const teste = [Product1, Product2, Product3, Product4];

  function handleNextClick(event) {
    if (contar === 3) {
      setContar(3);
    } else {
      setContar(contar + 1);
    }
    setProduct(teste[contar]);
  }

  function handlePreviusClick(event) {
    if (contar === 0) {
      setContar(0);
    } else {
      setContar(contar - 1);
    }
    setProduct(teste[contar]);
  }
  if (produto)
    return (
      <>
        <div setProduto={setModal} className={styles.modal}>
          <div className={styles.modalProduct}>
            <button
              className={styles.BtnClose}
              onClick={() => setProduto(false)}
            >
              <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                  fill="#fff"
                  fillRule="evenodd"
                />
              </svg>
            </button>
            <div>
              <div className={`${styles.modalContent}`}>
                <button onClick={handlePreviusClick}>
                  <svg
                    width="12"
                    height="18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 1 3 9l8 8"
                      stroke="#1D2026"
                      strokeWidth="3"
                      fill="none"
                      fillRule="evenodd"
                    />
                  </svg>
                </button>
                <img src={product} id="Produto1" alt="Produto 1" />
                <button onClick={handleNextClick}>
                  <svg
                    width="13"
                    height="18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m2 1 8 8-8 8"
                      stroke="#1D2026"
                      strokeWidth="3"
                      fill="none"
                      fillRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <ul className={styles.ProdutosList}>
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
          </div>
        </div>
      </>
    );
  return null;
};

export default Produtos;
