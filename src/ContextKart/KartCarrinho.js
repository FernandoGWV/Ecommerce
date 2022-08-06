import React from "react";

const CarrinhoContext = React.createContext({
  carrinho: [],
  addItem: () => {},
  limpaDados: [],
});

const Carrinho = ({ children }) => {
  const [carrinho, setCarrinho] = React.useState(
    JSON.parse(localStorage.getItem("@cart")) || []
  );

  React.useEffect(() => {
    localStorage.setItem("@cart", JSON.stringify(carrinho));
  }, [carrinho]);

  const limpaDados = (titulo, preco, total, imagem, id) => {
    const item = {
      titulo,
      preco,
      total,
      imagem,
    };
    const NovoCarrinho = carrinho.filter((item) => item.id !== id);
    NovoCarrinho.splice(item);
    setCarrinho(NovoCarrinho);
    console.log(carrinho.filter((item) => item.id));
  };

  const addItem = (titulo, preco, total, imagem, id) => {
    const item = {
      titulo,
      preco,
      total,
      imagem,
    };
    const NovoCarrinho = carrinho.filter((item) => item.id !== id);
    NovoCarrinho.push(item);
    setCarrinho(NovoCarrinho);
    console.log(carrinho.filter((item) => item.id));
  };

  return (
    <CarrinhoContext.Provider
      value={{
        carrinho,
        addItem,
        limpaDados,
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
