import { UploadOutlined } from '@ant-design/icons';
import { Form } from '@ant-design/compatible';
import '@ant-design/compatible/assets/index.css';
import { Input, Radio, Avatar, Upload, Select, Row, Col, Button } from 'antd';
import React from 'react';

const { Option } = Select;

const BasicConfigs = Form.create({ name: 'form_in_modal' })(
  ({ form: { getFieldDecorator } }) => (
    <>
      <h2>Basic Configurations</h2>
      <Col span={6}>
        <Form layout="vertical">
          <Form.Item label="Email">
            {getFieldDecorator('email', {
              rules: [{ required: true, message: 'Please input your email.' }],
            })(<Input />)}
          </Form.Item>
          <Form.Item label="Name">
            {getFieldDecorator('name')(<Input />)}
          </Form.Item>
          <Form.Item label="Description">
            {getFieldDecorator('description')(<Input.TextArea rows={4} />)}
          </Form.Item>
          <Form.Item label="Country">
            <Select defaultValue="Portugal">
              <Option value="Portugal">Portugal</Option>
              <Option value="Spain">Spain</Option>
              <Option value="United Kingdom" disabled>
                United Kingdom
              </Option>
            </Select>
          </Form.Item>
          <Form.Item label="Profile Type">
            {getFieldDecorator('modifier', {
              initialValue: 'public',
            })(
              <Radio.Group>
                <Radio value="public">Public</Radio>
                <Radio value="private">Private</Radio>
              </Radio.Group>
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary">Save</Button>
          </Form.Item>
        </Form>
      </Col>
      <Col span={6} offset={2}>
        <Row>
          <Avatar
            size={150}
            src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"
          />
        </Row>
        <Row style={{ marginTop: 15 }}>
          <Upload>
            <Button>
              <UploadOutlined /> Change picture
            </Button>
          </Upload>
        </Row>
      </Col>
    </>
  )
);

export default BasicConfigs;
