import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {store,persistor} from '../src/store/';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';


/*Paginas*/

import Login from './view/login';
import Home from './view/home';
import addPaciente from './view/addPaciente';
import addRemedio from './view/addRemedio';
import EntregaRemedio from './view/entregaRemedio/entregaRemedio';
import listarRemedio from './view/listarRemedio/listarRemedio';
import listarPaciente from './view/listarPaciente/listarPaciente';
import entregaRemedio from './view/entregaRemedio/entregaRemedio';

import UsuarioRecuperarSenha from './view/usuario-recuperar-senha';

function App() {
  return (

    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Route exact path='/' component={Login} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/addPaciente' component={addPaciente} />
          <Route exact path='/editarpaciente/:id' component={addPaciente} />
          <Route exact path='/addRemedio' component={addRemedio} />
          <Route exact path='/editarremedio/:id' component={addRemedio} />
          <Route exact path='/entregaRemedio/:id' component={entregaRemedio} />
          <Route exact path='/entregaRemedio' component={entregaRemedio} />
          <Route exact path='/listarRemedio' component={listarRemedio} />
          <Route exact path='/listarPaciente' component={listarPaciente} />
          <Route exact path='/usuariorecuperarsenha' component={UsuarioRecuperarSenha} />
      
        </Router>
      </PersistGate>
    </Provider>

  );
}

export default App;
