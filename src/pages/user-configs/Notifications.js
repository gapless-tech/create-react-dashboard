import React, { Component } from 'react';
import { Switch, List } from 'antd';

class NotificationView extends Component {
  getData = () => {
    const Action = (
      <Switch
        checkedChildren="Active"
        unCheckedChildren="Inactive"
        defaultChecked
      />
    );
    return [
      {
        title: 'System Messages',
        description:
          'You will be notified by the system whenever an action is triggered',
        actions: [Action],
      },
      {
        title: 'To-Do List',
        description: 'This will activate an To-Do list in the Homepage',
        actions: [Action],
      },
    ];
  };

  render() {
    return (
      <>
        <h2>Notifications</h2>
        <List
          itemLayout="horizontal"
          dataSource={this.getData()}
          renderItem={(notification) => (
            <List.Item actions={notification.actions}>
              <List.Item.Meta
                title={notification.title}
                description={notification.description}
              />
            </List.Item>
          )}
        />
      </>
    );
  }
}

export default NotificationView;
