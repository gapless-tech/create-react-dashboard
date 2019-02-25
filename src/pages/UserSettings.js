import React, { Component } from 'react';
import { Tabs, Card } from 'antd';
import './UserSettings.css';
import BasicConfigs from './UserConfigs/BasicConfigs';
import Notifications from './UserConfigs/Notifications';
import Security from './UserConfigs/Security'

const TabPane = Tabs.TabPane;

export default class UserSettings extends Component {
  render() {
    return (
      <Card bodyStyle={{paddingLeft:0}}>
        <Tabs defaultActiveKey="1" tabPosition='left'>
          <TabPane tab="Basic Configurations" key="1">{<BasicConfigs/>}</TabPane>
          <TabPane tab="Security" key="3">{<Security/>}</TabPane>
          <TabPane tab="Notifications" key="4">{<Notifications/>}</TabPane>
        </Tabs>
      </Card>
    );
  }
}