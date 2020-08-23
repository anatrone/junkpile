/* eslint-disable arrow-body-style */
/* eslint-disable no-console */
/* eslint-disable import/extensions */
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ButtonVideo } from '../../../Components/Button';
import PageDefault from '../../../Components/PageDefault';
import FormField from '../../../Components/FormField';
import useForm from '../../../Hooks/useForm';
import videosRepository from '../../../Repositories/videos';
import categoriasRepository from '../../../Repositories/categorias';
import { TitleHeader, Form } from './styles';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { handleChange, values } = useForm({
    titulo: '',
    url: '',
    categoria: '',
  });

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);

  return (
    <PageDefault>
      <TitleHeader>Cadastro de Video</TitleHeader>

      <Form onSubmit={(event) => {
        event.preventDefault();
        // alert('Video Cadastrado com sucesso!!!1!');

        const categoriaEscolhida = categorias.find((categoria) => {
          return categoria.titulo === values.categoria;
        });

        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: categoriaEscolhida.id,
        })
          .then(() => {
            console.log('Cadastrou com sucesso!');
            history.push('/');
          });
      }}
      >
        <FormField
          label="Título do Vídeo"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
          suggestions={categoryTitles}
        />

        <ButtonVideo type="submit">
          Cadastrar
        </ButtonVideo>
      </Form>

    </PageDefault>
  );
}

export default CadastroVideo;
