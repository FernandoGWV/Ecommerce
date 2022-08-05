import React from "react";

const CarrinhoContext = React.createContext({
  carrinho: [],
  addItem: () => {},
});

const Carrinho = ({ children }) => {
  const [carrinho, setCarrinho] = React.useState(
    JSON.parse(localStorage.getItem("@cart")) || []
  );

  React.useEffect(() => {
    localStorage.setItem("@cart", JSON.stringify(carrinho));
  }, [carrinho]);

  const addItem = (titulo, preco, total, imagem) => {
    const item = {
      titulo,
      preco,
      total,
      imagem,
    };
    setCarrinho(() => item);
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

export const useCarrinho = () => {
  const context = React.useContext(CarrinhoContext);
  return context;
};
export default Carrinho;
