import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';

const { Content: AntContent } = Layout;

const Content = ({ children, matchedRoutes }) => (
  <AntContent style={{ margin: '0 16px' }}>
    <Breadcrumb style={{ margin: '16px 16px 0px 16px' }}>
      {matchedRoutes.map(({ route }, idx) => (
        <Breadcrumb.Item key={route.path}>
          {idx === matchedRoutes.length - 1 ? (
            route.title
          ) : (
            <Link to={route.path}>{route.title}</Link>
          )}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
    <div style={{ padding: 16 }}>{children}</div>
  </AntContent>
);

export default Content;
