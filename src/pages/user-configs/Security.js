import React, { Component } from 'react';
import { List } from 'antd';

class Security extends Component {
  getData = () => [
    {
      title: 'Account Password',
      description: (
        <>
          Current Password Strength:{' '}
          <span style={{ color: 'green' }}>Strong</span>
        </>
      ),
      actions: [<span>Modify</span>],
    },
    {
      title: 'Security Phone',
      description: <span>*******71</span>,
      actions: [<span>Modify</span>],
    },
    {
      title: 'Backup Email',
      description: <span>an*******gmail.com</span>,
      actions: [<span>Modify</span>],
    },
  ];

  render() {
    return (
      <>
        <h2>Security</h2>
        <List
          itemLayout="horizontal"
          dataSource={this.getData()}
          renderItem={(item) => (
            <List.Item actions={item.actions}>
              <List.Item.Meta
                title={item.title}
                description={item.description}
              />
            </List.Item>
          )}
        />
      </>
    );
  }
}

export default Security;
