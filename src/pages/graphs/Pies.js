import React from 'react';
import { Row, Col, Card } from 'antd';
import Pie from '../../components/graphs/Pie';

export default () => (
  <Row gutter={16}>
    <Col>
      <Card>
        <Pie
          height={{
            height: 500
          }}
        />
      </Card>
    </Col>
  </Row>
);
