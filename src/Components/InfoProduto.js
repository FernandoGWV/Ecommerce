import React from "react";
import styles from "./StylesComponents/InfoProduto.module.css";

const InfoProduto = () => {
  return (
    <aside className={styles.aside}>
      <div>
        <span>sneaker company</span>
        <h1 className={styles.title}>
          Fall Limited Edition <br />
          Sneakers
        </h1>
        <p>
          These low-profile sneakrs are you perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer
        </p>
        <div>
          <em>$125.00</em> <span>50%</span>
        </div>
        <span>$250.00</span>
        <div>
          <button className={styles.BtnMimus}></button>
          {""} <button className={styles.BtnPlus}> </button>
          {""} <button className={styles.BtnCart}></button>
        </div>
      </div>
    </aside>
  );
};

export default InfoProduto;
