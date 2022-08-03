import React from "react";

const ProdutoJson = ({ title, preco, total, thumb }) => {
  const infoProdutos = {};
  infoProdutos.title = { title };
  infoProdutos.preco = { preco };
  infoProdutos.total = { total };
  infoProdutos.imagem = { thumb };

  return JSON.stringify(infoProdutos);
};

export default ProdutoJson;
