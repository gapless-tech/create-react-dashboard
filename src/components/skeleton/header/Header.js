import React from 'react';
import { Layout, Menu, Icon, Avatar, Dropdown } from 'antd';
import './Header.css';

const { Header: AntHeader } = Layout;

// This is going to be a new component when we have everything connected.
const avatarMenu = (
    <Menu>
      <Menu.Item key="0">
        <a href="http://www.alipay.com/">1st menu item</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="http://www.taobao.com/">2nd menu item</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
);

const Header = ({ isSiderCollapsed, onToggleSider }) => (
    <AntHeader style={{ background: '#fff', padding: 0 }}>
        <Icon
            className="trigger"
            type={isSiderCollapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={onToggleSider}
        />
        <Dropdown overlay={avatarMenu} trigger={['click']}>
            <Avatar
              size="large"
              shape="square"
              className="avatar"
              icon="user"
            />
        </Dropdown>
    </AntHeader>
);

export default Header;