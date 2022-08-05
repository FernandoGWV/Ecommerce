import React from "react";

import InfoProduto from "./InfoProduto.js";
import styles from "./StylesComponents/Produto.module.css";
import ModalProduto from "./ModalProduto";
const Produto = ({
  titulo,
  description,
  preco,
  promo,
  desconto,
  OthersImage,
}) => {
  const [modal, setModal] = React.useState(null);
  const [product, setProduct] = React.useState(OthersImage[0]?.linkLarge);
  const img = React.useRef(OthersImage[0]?.linkLarge);
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
            {OthersImage.map((item) => {
              return (
                <li>
                  <img
                    src={OthersImage.linkSmall}
                    onClick={() => setProduct(OthersImage.linkLarge)}
                    id="Produto1"
                    alt="Produto thumbanil 1"
                  />
                </li>
              );
            })}
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
