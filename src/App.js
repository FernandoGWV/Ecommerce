import React from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import "./App.css";
import CarrinhoContext from "./ContextKart/KartCarrinho";

const App = () => {
  return (
    <CarrinhoContext>
      <Header />
      <Home />
    </CarrinhoContext>
  );
};

export default App;
