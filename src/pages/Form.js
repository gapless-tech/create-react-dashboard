import { Card, Row, Col } from 'antd';
import React from 'react';
import RegisterForm from './Form/RegisterForm';
import FormExamples from './Form/FormValidations';
import OtherFormControls from './Form/OtherFormControls';

export default class Form extends React.Component {
  render() {
    return (
    <>
      <Row gutter={36}>
        <Col span={8}>
          <Card title="Form" headStyle={{textAlign:'center'}}>
            <RegisterForm/>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Other Form Controls" headStyle={{textAlign:'center'}}>
            <OtherFormControls/>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Form Validation Examples" headStyle={{textAlign:'center'}}>
            <FormExamples/>
          </Card>
        </Col>
      </Row>
    </>
    );
  };
};