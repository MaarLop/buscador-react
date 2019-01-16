import './App.css';
import React from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Root from './componentes/Root.jsx';

import Home from './componentes/Home.jsx'
import Sitio from './componentes/Sitio.jsx'
import Categoria from './componentes/Categoria'

export default class App extends React.Component {
    render() {
        return (
          <BrowserRouter>
            <Root>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/sitio/:id_sitio" component={Sitio} />
                <Route exact path="/sitio/:id_sitio/categoria/:id_categiria" component={Categoria} />
              </Switch>
            </Root>
          </BrowserRouter>
        );
      }
    }