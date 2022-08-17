import React from "react";
import styles from "./StylesComponents/InfoProduto.module.css";
import { ReactComponent as Minus } from "../Assets/icon-minus.svg";
import { ReactComponent as Plus } from "../Assets/icon-plus.svg";
import { ReactComponent as Cart } from "../Assets/icon-cart.svg";
import { useCarrinho } from "../ContextKart/KartCarrinho";

const InfoProduto = ({
  img,
  titulo,
  description,
  preco,
  promo,
  desconto,
  id,
  OthersImage,
}) => {
  const carrinho = useCarrinho();
  const [contar, setContar] = React.useState(0);
  function handleClick() {
    if (contar === 0) {
      setContar(0);
    } else {
      setContar(contar - 1);
    }
  }

  const imagem = img.current;

  function handleSubmit(event) {
    event.preventDefault();
    carrinho.addItem(titulo, promo, contar, imagem, id);
    window.alert("Item Adicionado ao carrinho");
  }

  return (
    <aside className={styles.aside}>
      <div>
        <span>sneaker company</span>

        <h1 className={styles.title}>{titulo}</h1>
        <p>{description}</p>
        <div className={styles.preco}>
          <strong>${promo.toFixed(2)}</strong>
          <span>{desconto}%</span>
        </div>
        <span>${preco.toFixed(2)}</span>
        <div className={styles.btn}>
          <div className={styles.btnSoma}>
            <button onClick={handleClick}>
              <Minus />
            </button>
            <span> {contar}</span>
            <button
              onClick={() => {
                setContar(contar + 1);
              }}
            >
              <Plus />
            </button>
          </div>
          {contar === 0 ? (
            <button disabled className={styles.BtnCart}>
              <Cart />
              Add to cart
            </button>
          ) : (
            <button className={styles.BtnCart} onClick={handleSubmit}>
              {" "}
              <Cart />
              Add to cart
            </button>
          )}
        </div>
      </div>
    </aside>
  );
};

export default InfoProduto;
