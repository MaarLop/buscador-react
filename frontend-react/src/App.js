import './App.css';
import React from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Root from './componentes/Root.jsx';

import Home from './componentes/Home'

export default class App extends React.Component {
    render() {
        return (
          <BrowserRouter>
            <Root>
              <Switch>
                <Route exact path="/" component={Home} />
              </Switch>
            </Root>
          </BrowserRouter>
        );
      }
    }