import React from "react";
import Produto from "./Produto.js";
import styles from "./StylesComponents/Home.module.css";
import ProdutosDB from "../ProdutoDataBase/ProdutosDB.js";

const Home = () => {
  return (
    <section className={styles.HomeContainer}>
      <main>
        {ProdutosDB.map((produtos) => {
          return (
            <ul>
              <li>{<Produto {...produtos} key={produtos.id} />}</li>
            </ul>
          );
        })}
      </main>
    </section>
  );
};

export default Home;
