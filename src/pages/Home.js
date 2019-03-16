import React from 'react';
import {
  Statistic,
  Card,
  Row,
  Col,
  Icon,
  Avatar,
  Button,
  Calendar
} from 'antd';

const { Meta } = Card;

export default () => (
  <>
    <Row gutter={16} style={{ marginBottom: 20 }}>
      <Col span={4}>
        <Card
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          actions={[
            <Icon type="setting" />,
            <Icon type="edit" />,
            <Icon type="ellipsis" />
          ]}
        >
          <Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title="Card title"
            description="This is the description"
          />
        </Card>
      </Col>
      <Col span={4}>
        <Card style={{ marginBottom: 5 }}>
          <Statistic title="Active Users" value={112893} />
        </Card>
        <Card>
          <Statistic
            title="Active"
            value={11.28}
            precision={2}
            valueStyle={{ color: '#3f8600' }}
            prefix={<Icon type="arrow-up" />}
            suffix="%"
          />
        </Card>
      </Col>
      <Col span={4}>
        <Card>
          <Statistic
            title="Account Balance (CNY)"
            value={112893}
            precision={2}
          />
          <Button style={{ marginTop: 16 }} type="primary">
            Recharge
          </Button>
        </Card>
      </Col>
      <Col span={12}>
        <Card>
          <Calendar fullscreen={false} />
        </Card>
      </Col>
    </Row>
    <Row gutter={12}>
      <div style={{ background: '#ECECEC' }}>
        <Col span={6}>
          <Card title="Card title">Card content</Card>
        </Col>
        <Col span={6}>
          <Card title="Card title">Card content</Card>
        </Col>
        <Col span={6}>
          <Card title="Card title">Card content</Card>
        </Col>
        <Col span={6}>
          <Card title="Card title">Card content</Card>
        </Col>
      </div>
    </Row>
  </>
);
