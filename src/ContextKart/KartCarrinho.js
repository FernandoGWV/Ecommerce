import React from "react";

const Carrinho = React.createContext({
  carrinho: [],
  addItem: () => {},
});

const CarrinhoContext = ({ children }) => {
  const [carrinho, setCarrinho] = React.useState(
    JSON.parse(localStorage.setItem("@cart") || [])
  );

  React.useEffect(() => {
    localStorage.getItem("@cart", JSON.stringify(carrinho));
  }, [carrinho]);

  const addItem = (titulo, preco, total, imagem) => {
    const item = {
      titulo,
      preco,
      total,
      imagem,
    };
    setCarrinho((atual) => atual.concat(item));
  };

  return (
    <CarrinhoContext.Provider
      value={{
        carrinho,
        addItem,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
};

export default CarrinhoContext;
