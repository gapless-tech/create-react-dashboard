import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import Bar from '../components/graphs/Bar';

export default class Bars extends Component {
  render() {
    const height = {
      height: 500
    }
    return (
      <>
        <Row gutter={16}>
          <Col span={12}>
              <Card>
                <Bar height={height} layout='horizontal'/>
              </Card>
            </Col>
          <Col span={12}>
            <Card>
              <Bar height={height} layout='vertical'/>
            </Card>
          </Col>
        </Row>
      </>
    )
  }
}
