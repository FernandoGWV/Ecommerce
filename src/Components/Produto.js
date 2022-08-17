import React from "react";

import InfoProduto from "./InfoProduto.js";
import styles from "./StylesComponents/Produto.module.css";
import ModalProduto from "./ModalProduto";
import useMedia from "./useMedia";
const Produto = ({
  titulo,
  description,
  preco,
  promo,
  desconto,
  id,
  OthersImage,
}) => {
  const [modal, setModal] = React.useState(null);
  const [product, setProduct] = React.useState(OthersImage[0]?.linkLarge);
  const img = React.useRef(OthersImage[0]?.linkLarge);

  const mobile = useMedia("(max-width: 914px)");

  return (
    <>
      <section>
        <div
          className={`${styles.ArtgProduto} ${mobile && styles.ProdutoMobile}`}
        >
          <div>
            <div className={`${styles.content}`}>
              <img
                src={product}
                id="Produto1"
                alt="Produto 1"
                onClick={() => setModal(true)}
              />
            </div>
            {mobile || (
              <ul>
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
            )}
          </div>
          <InfoProduto
            img={img}
            titulo={titulo}
            description={description}
            preco={preco}
            promo={promo}
            id={id}
            desconto={desconto}
          />
        </div>
        {modal && (
          <ModalProduto
            produto={modal}
            setProduto={setModal}
            img={img}
            OthersImage={OthersImage}
          />
        )}
      </section>
    </>
  );
};

export default Produto;
