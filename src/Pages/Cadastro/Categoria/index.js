/* eslint-disable no-console */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';
import PageDefault from '../../../Components/PageDefault';
import FormField from '../../../Components/FormField';
import Button from '../../../Components/Button';
import { TitleHeader } from './styles';

const CadastroCategoria = () => {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(key, value) {
    // key: nome, descricao ...
    setValues({
      ...values,
      [key]: value, // key: 'value'
    });
  }

  const handleChange = (event) => {
    setValue(
      event.target.getAttribute('name'), // nome campo
      event.target.value, // valor digitado no input
    );
  };

  useEffect(() => {
    const isLocalHost = window.location.hostname.includes('localhost');
    const URL_MASTER = isLocalHost ? 'http://localhost:8080/categorias' : 'https://junkpile.herokuapp.com/categorias';
    fetch(URL_MASTER)
      .then(async (responseServer) => {
        const resposta = await responseServer.json();
        setCategorias([
          ...resposta,
        ]);
      });
    // setTimeout(() => {
    //   setCategorias([
    //     ...categorias,
    //     {
    //       id: 1,
    //       nome: 'Front End',
    //       descricao: 'Uma categoria show',
    //       cor: '#cbd1ff',
    //     },
    //     {
    //       id: 2,
    //       nome: 'Back End',
    //       descricao: 'Uma categoria loca',
    //       cor: '#cbff',
    //     },
    //   ]);
    // }, 4 * 1000);
  }, []);

  return (
    <PageDefault>
      <TitleHeader>
        Cadastro de Categoria: {values.nome}
      </TitleHeader>

      <form
        onSubmit={function handleSubmit(infosDoEvento) {
          infosDoEvento.preventDefault();
          setCategorias([
            ...categorias,
            values,
          ]);

          setValues(valoresIniciais);
        }}
      >
        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
      <div>
        {/* Cargando... */}
        Loading...
      </div>
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.nome}`}>
            {categoria.nome}
          </li>
        ))}
      </ul>

      <Button to="/">Ir para Home</Button>
    </PageDefault>
  );
};

export default CadastroCategoria;
