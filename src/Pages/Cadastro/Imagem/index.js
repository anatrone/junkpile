/* eslint-disable linebreak-style */
import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../Components/PageDefault';

const CadastroImagem = () => (
  <PageDefault>
    <p>Cadastro de Imagem</p>

    <Link to="/cadastro/categoria">Cadastrar Categoria</Link>
  </PageDefault>
);

export default CadastroImagem;
