import React from "react";
import styles from "./StylesComponents/InfoProduto.module.css";
import { ReactComponent as Minus } from "../Assets/icon-minus.svg";
import { ReactComponent as Plus } from "../Assets/icon-plus.svg";
import { useCarrinho } from "../ContextKart/KartCarrinho";

const InfoProduto = ({
  img,
  titulo,
  description,
  preco,
  promo,
  desconto,
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

  const h1 = React.useRef();
  const valor = React.useRef();
  const quantidade = React.useRef();
  const imagem = img.current;

  function handleSubmit(event) {
    event.preventDefault();

    const preco = valor.current.innerText;
    const total = quantidade.current.innerText;
    const thumb = imagem;
    carrinho.addItem(titulo, preco, total, thumb);
  }

  return (
    <aside className={styles.aside}>
      <div>
        <span>sneaker company</span>

        <h1 className={styles.title}>{titulo}</h1>
        <p>{description}</p>
        <div className={styles.preco}>
          <strong ref={valor}>${promo.toFixed(2)}</strong>
          <span>{desconto}%</span>
        </div>
        <span>${preco.toFixed(2)}</span>
        <div className={styles.btn}>
          <div className={styles.btnSoma}>
            <button onClick={handleClick}>
              <Minus />
            </button>
            <span ref={quantidade}> {contar}</span>
            <button
              onClick={() => {
                setContar(contar + 1);
              }}
            >
              <Plus />
            </button>
          </div>
          <button className={styles.BtnCart} onClick={handleSubmit}>
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill="#fff"
                fillRule="nonzero"
              />
            </svg>{" "}
            Add to cart
          </button>
        </div>
      </div>
    </aside>
  );
};

export default InfoProduto;
