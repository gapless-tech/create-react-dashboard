import React, { Component, Fragment } from 'react';
import { List } from 'antd';

class Security extends Component {
  getData = () => [
    {
      title: "Account Password",
      description: (
        <Fragment>
          Current Password Strength: <span style={{color:'green'}}>Strong</span>
        </Fragment>
      ),
      actions: [
        <a>Modify</a>,
      ],
    },
    {
      title: "Security Phone",
      description: (
        <span>
          *******71
        </span>
      ),
      actions: [
        <a>Modify</a>,
      ],
    },
    {
      title: "Backup Email",
      description: (
        <span>
          an*******gmail.com
        </span>
      ),
      actions: [
        <a>Modify</a>,
      ],
    },
  ];

  render() {
    return (
      <Fragment>
        <h2>Security</h2>
        <List
          itemLayout="horizontal"
          dataSource={this.getData()}
          renderItem={item => (
            <List.Item actions={item.actions}>
              <List.Item.Meta title={item.title} description={item.description} />
            </List.Item>
          )}
        />
      </Fragment>
    );
  }
}

export default Security;