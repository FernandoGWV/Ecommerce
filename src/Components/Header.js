import React from "react";
import styles from "./StylesComponents/Header.module.css";
import { ReactComponent as Cart } from "../Assets/icon-cart.svg";
import AvatarPng from "../Assets/image-avatar.png";
import { ReactComponent as Logo } from "../Assets/logo.svg";
import ProdutoJson from "./ProdutoJson";
import { useCarrinho } from "../ContextKart/KartCarrinho";
const Header = () => {
  const dados = ProdutoJson;

  const CarinhoContext = useCarrinho();
  const arrayDado = [dados.title, dados.preco, dados.total];
  console.log(arrayDado);
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
      <div>
        <figure>
          {" "}
          <span>{CarinhoContext.carrinho.length}</span>
          <Cart />
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
