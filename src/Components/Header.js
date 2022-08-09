import React from "react";
import styles from "./StylesComponents/Header.module.css";
import { ReactComponent as Cart } from "../Assets/icon-cart.svg";
import AvatarPng from "../Assets/image-avatar.png";
import { ReactComponent as Delete } from "../Assets/icon-delete.svg";
import { ReactComponent as Logo } from "../Assets/logo.svg";
import { useCarrinho } from "../ContextKart/KartCarrinho";
import ProdutoDB from "../ProdutoDataBase/ProdutosDB";
const Header = () => {
  const CarinhoContext = useCarrinho();
  const [modal, setModal] = React.useState(false);
  console.log(CarinhoContext.carrinho.preco);
  function DeleteProduto() {
    CarinhoContext.limpaDados();
  }

  return (
    <header className={`${styles.ModSection1} container`}>
      {" "}
      <nav>
        <figure>
          <Logo />
        </figure>
        <ul>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className={styles.IconsContent}>
        <figure className={styles.CartIcon}>
          {" "}
          <span
            style={{
              display: CarinhoContext.carrinho.length === 0 ? "none" : "block",
            }}
          >
            {CarinhoContext.carrinho.length}
          </span>
          <Cart onClick={() => setModal(!modal)} />
          <div
            className={styles.kartComponent}
            style={{ display: modal ? "grid" : "none" }}
          >
            {CarinhoContext.carrinho.length === 0 ? (
              <p className={styles.kartAviso}>Carrinho vazio...</p>
            ) : (
              <ul className={styles.listCart}>
                {CarinhoContext.carrinho.map((item) => {
                  return (
                    <li>
                      {" "}
                      <div>
                        <img src={item.imagem} alt="" />
                        <p>{item.titulo}</p>{" "}
                      </div>
                      <span>${item.preco.toFixed(2)}</span> x{" "}
                      <span
                        style={{
                          display: item.total === 0 ? "none" : "inline",
                        }}
                      >
                        {item.total}
                      </span>
                      <strong style={{ marginLeft: "10px" }}>
                        ${item.total ? item.total * item.preco : item.preco}.00
                      </strong>
                      <button onClick={DeleteProduto}>
                        <Delete />
                      </button>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </figure>

        <figure className={styles.avatar}>
          {" "}
          <img src={AvatarPng} alt="Avatar" />
        </figure>
      </div>
    </header>
  );
};

export default Header;
