import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config';
import { Switch, BrowserRouter } from 'react-router-dom';
import getRoutes from './routes';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Switch>{renderRoutes(getRoutes({ isLoggedUser: true }))}</Switch>
        </BrowserRouter>
    );
  }
}

export default App;
