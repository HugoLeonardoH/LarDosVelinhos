import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { store, persistor } from '../src/store/';
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
        <Router basename={process.env.PUBLIC_URL}>
          <Route exact path='/' component={Login} />
          <Route path='/home' component={Home} />
          <Route path='/addPaciente' component={addPaciente} />
          <Route path='/editarpaciente/:id' component={addPaciente} />
          <Route path='/addRemedio/:id' component={addRemedio} />
          <Route path='/editarremedio/:id' component={addRemedio} />
          <Route path='/entregaRemedio/:id' component={entregaRemedio} />         
          <Route path='/listarRemedio' component={listarRemedio} />
          <Route path='/listarPaciente' component={listarPaciente} />
          <Route path='/usuariorecuperarsenha' component={UsuarioRecuperarSenha} />

        </Router>
      </PersistGate>
    </Provider>

  );
}

export default App;
