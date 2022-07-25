import React from "react";
import Produto from "./Produto.js";
import styles from "./StylesComponents/Home.module.css";

const Home = () => {
  return (
    <section className={styles.HomeContainer}>
      <main>
        <Produto />
      </main>
    </section>
  );
};

export default Home;
