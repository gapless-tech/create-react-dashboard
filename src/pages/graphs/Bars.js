import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import Bar from '../../components/graphs/Bar';

export default class Bars extends Component {
  render() {
    const height = {
      height: 500
    }
    return (
      <>
        <Row gutter={16}>
          <Col span={12}>
            <Card title='Horizontal' headStyle={{textAlign:'center'}}>
              <Bar
                height={height}
                axisBottomLabel='Food'
                axisLeftLabel='Country'
                layout='horizontal'
              />
            </Card>
          </Col>
          <Col span={12}>
            <Card title='Vertical' headStyle={{textAlign:'center'}}>
              <Bar
                height={height}
                axisBottomLabel='Country'
                axisLeftLabel='Food'
                layout='vertical'
              />
            </Card>
          </Col>
        </Row>
      </>
    )
  }
}
