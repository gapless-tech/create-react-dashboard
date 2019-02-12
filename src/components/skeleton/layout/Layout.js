import React from 'react';
import { Layout as AntLayout } from 'antd';
import Toggle from '@render-props/toggle';
import { renderRoutes } from 'react-router-config';
import { Footer, Sider, Header, Content } from '..';
import * as menuTypes from '../../../routes/menuTypes';

const Layout = ({ route, location }) => {
  const { routes } = route;
  const children = renderRoutes(routes);
  const mainMenuRoutes = menuTypes.filterByType(routes, menuTypes.main)

  // In the future this info will come from .env
  const footer = 'Ant Design ©2018 Gapless-Tech';

  return (
    <Toggle initialValue={false}>
      {({ toggle, value }) => (
        <AntLayout style={{ minHeight: '100vh' }}>
          <Sider isCollapsed={value} mainMenuRoutes={mainMenuRoutes} currentPath={location.pathname} />
          <AntLayout>
            <Header isSiderCollapsed={value} onToggleSider={toggle} />
            <Content>{children}</Content>
            <Footer footer={footer} />
          </AntLayout>
        </AntLayout>
      )}
    </Toggle>
  );
};

export default Layout;
