import React from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import "./App.css";
import Carrinho from "./ContextKart/KartCarrinho";

const App = () => {
  return (
    <Carrinho>
      <Header />
      <Home />
    </Carrinho>
  );
};

export default App;
