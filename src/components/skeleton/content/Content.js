import React from 'react';
import { Layout, Breadcrumb } from 'antd';

const { Content: AntContent } = Layout;

const Content = ({ children }) => (
    <AntContent style={{ margin: '0 16px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Graphs</Breadcrumb.Item>
            <Breadcrumb.Item>Pie</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ padding: 16 }}>
            {children}
        </div>
    </AntContent>
);

export default Content;