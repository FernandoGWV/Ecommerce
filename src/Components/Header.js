import React from "react";
import styles from "./StylesComponents/Header.module.css";
import { ReactComponent as Cart } from "../Assets/icon-cart.svg";
import AvatarPng from "../Assets/image-avatar.png";
import { ReactComponent as Logo } from "../Assets/logo.svg";
import { useCarrinho } from "../ContextKart/KartCarrinho";
const Header = () => {
  const CarinhoContext = useCarrinho();

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
        <figure>
          {" "}
          <span
            style={{
              display: CarinhoContext.carrinho.length === 0 ? "none" : "block",
            }}
          >
            {CarinhoContext.carrinho.length}
          </span>
          <Cart />
          <div className={styles.kartComponent}>
            <ul className={styles.listCart}>
              {CarinhoContext.carrinho.map((item, index) => {
                return (
                  <li>
                    {" "}
                    <div>
                      <img src={item.imagem} alt="" />
                      <p>{item.titulo}</p>{" "}
                    </div>
                    <span>${item.preco.toFixed(2)}</span> x{" "}
                    <span
                      style={{ display: item.total === 0 ? "none" : "inline" }}
                    >
                      {item.total}
                    </span>
                    <strong>
                      {item.total ? item.total * item.preco : item.preco}
                    </strong>
                  </li>
                );
              })}
            </ul>
          </div>
        </figure>
        <figure>
          {" "}
          <img src={AvatarPng} alt="Avatar" />
        </figure>
      </div>
    </header>
  );
};

export default Header;
