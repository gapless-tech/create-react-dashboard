import React from 'react';
import { Row, Col, Card } from 'antd';
import Line from '../../components/graphs/Line';

export default () => (
  <Row gutter={16}>
    <Col>
      <Card>
        <Line
          height={{
            height: 500
          }}
        />
      </Card>
    </Col>
  </Row>
);
