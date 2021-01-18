import React from 'react';
import { Tabs, Card } from 'antd';
import './UserSettings.css';
import BasicConfigs from './user-configs/BasicConfigs';
import Notifications from './user-configs/Notifications';
import Security from './user-configs/Security';

const { TabPane } = Tabs;

export default () => (
  <Card bodyStyle={{ paddingLeft: 0 }}>
    <Tabs defaultActiveKey="1" tabPosition="left">
      <TabPane tab="Basic Configurations" key="1">
        <BasicConfigs />
      </TabPane>
      <TabPane tab="Security" key="3">
        <Security />
      </TabPane>
      <TabPane tab="Notifications" key="4">
        <Notifications />
      </TabPane>
    </Tabs>
  </Card>
);
