import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Home from './Pages/Home';
import CadastroImagem from './Pages/Cadastro/Imagem';
import CadastroCategoria from './Pages/Cadastro/Categoria';
import Error404 from './Pages/Error/404';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route component={Home} path="/" exact />
      <Route component={CadastroImagem} path="/cadastro/imagem" />
      <Route component={CadastroCategoria} path="/cadastro/categoria" />
      <Route component={Error404} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
