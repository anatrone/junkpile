/* eslint-disable no-console */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';
import PageDefault from '../../../Components/PageDefault';
import FormField from '../../../Components/FormField';
import { Button } from '../../../Components/Button';
import useForm from '../../../Hooks/useForm';
import { TitleHeader } from './styles';

const CadastroCategoria = () => {
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '',
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

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
        Titulo de Categoria: {values.titulo}
      </TitleHeader>

      <form
        onSubmit={function handleSubmit(infosDoEvento) {
          infosDoEvento.preventDefault();
          setCategorias([
            ...categorias,
            values,
          ]);

          clearForm();
        }}
      >
        <FormField
          label="Titulo da Categoria"
          type="text"
          name="titulo"
          value={values.titulo}
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
          <li key={`${categoria.titulo}`}>
            {categoria.titulo}
          </li>
        ))}
      </ul>

      <Button to="/">Ir para Home</Button>
    </PageDefault>
  );
};

export default CadastroCategoria;
