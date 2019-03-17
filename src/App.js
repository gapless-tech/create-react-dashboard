import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config';
import { Switch, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import getRoutes from './routes';
import { configApi } from './api-service';
import store from './store';

class App extends Component {
  componentDidMount() {
    configApi({ baseURL: process.env.REACT_APP_API_SERVICE_BASE_URL });
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>{renderRoutes(getRoutes({ isLoggedUser: true }))}</Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
