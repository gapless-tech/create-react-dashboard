import React, { Fragment } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Sider.css';

const { Sider: AntSider } = Layout;
const { SubMenu, Item } = Menu;

const Sider = ({ isCollapsed, mainMenuRoutes, matchedRoutes }) => {
  const activeKeys = matchedRoutes.map(item => item.route.name);

  return (
    <AntSider trigger={null} collapsible collapsed={isCollapsed}>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="inline"
        defaultOpenKeys={activeKeys}
        selectedKeys={activeKeys}
      >
        {mainMenuRoutes.map(({ name, title, icon, path, routes }) => {
          const Title = (
            <Fragment>
              {icon && <Icon type={icon} title={title} />}
              <span>{title}</span>
            </Fragment>
          );

          if (routes) {
            return (
              <SubMenu key={name} title={Title}>
                {routes.map(subRoutes => (
                  <Item key={subRoutes.name}>
                    <NavLink to={subRoutes.path}>{subRoutes.title}</NavLink>
                  </Item>
                ))}
              </SubMenu>
            );
          }

          return (
            <Item key={name} title={title}>
              <NavLink to={path}>{Title}</NavLink>
            </Item>
          );
        })}
      </Menu>
    </AntSider>
  );
};

Sider.propTypes = {
  isCollapsed: PropTypes.bool.isRequired,
  mainMenuRoutes: PropTypes.arrayOf(PropTypes.object).isRequired,
  matchedRoutes: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Sider;
