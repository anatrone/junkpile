import React from "react";
import { Link } from "react-router-dom";
import PageDefault from "../../Components/PageDefault";

const CadastroCategoria = () => {
  return (
    <PageDefault>
      <p>Cadastro de Categoria</p>

      <Link to="/">Ir para Home</Link>
    </PageDefault>
  );
};

export default CadastroCategoria;
