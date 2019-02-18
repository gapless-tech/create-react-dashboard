import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import Line from '../../components/graphs/Line';

export default class Bars extends Component {
  render() {
    const height = {
      height: 500
    }
    return (
      <Row gutter={16}>
        <Col>
          <Card>
            <Line height={height}/>
          </Card>
        </Col>
      </Row>
    )
  }
}
