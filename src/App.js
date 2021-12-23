import React from 'react';
import { renderRoutes } from 'react-router-config';
import { Switch, BrowserRouter } from 'react-router-dom';
import getRoutes from './routes';

const App = function () {
  return (
    <BrowserRouter>
      <Switch>{renderRoutes(getRoutes({ isLoggedUser: true }))}</Switch>
    </BrowserRouter>
  );
};

export default App;
