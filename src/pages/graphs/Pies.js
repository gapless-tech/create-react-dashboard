import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import Pie from '../../components/graphs/Pie';

export default class Bars extends Component {
  render() {
    const height = {
      height: 500
    }
    return (
      <Row gutter={16}>
        <Col>
          <Card>
            <Pie height={height}/>
          </Card>
        </Col>
      </Row>
    )
  }
}
