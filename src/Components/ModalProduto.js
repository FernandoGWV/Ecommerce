import React from "react";
import styles from "./StylesComponents/ModalProduto.module.css";

const Produtos = ({ produto, setProduto, OthersImage }) => {
  const [contar, setContar] = React.useState(0);
  const [modal, setModal] = React.useState(null);

  const [product, setProduct] = React.useState(OthersImage[contar].linkLarge);

  function handleNextClick(event) {
    if (contar === 3) {
      setContar(3);
    } else {
      setContar(contar + 1);
    }
    setProduct(OthersImage[contar].linkLarge);
  }

  function handlePreviusClick(event) {
    if (contar === 0) {
      setContar(0);
    } else {
      setContar(contar - 1);
    }
    setProduct(OthersImage[contar].linkLarge);
  }
  if (produto)
    return (
      <section className={styles.modal}>
        <div setProduto={setModal}>
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
                {OthersImage.map((item) => {
                  return (
                    <li>
                      <img
                        src={item.linkSmall}
                        onClick={() => setProduct(item.linkLarge)}
                        id="Produto1"
                        alt="Produto thumbanil 1"
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  return null;
};

export default Produtos;
