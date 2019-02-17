import React, { Component } from 'react';
import { Table, Icon, Switch, Radio, Form, Divider, Card } from 'antd';

const FormItem = Form.Item;
const expandedRowRender = record => <p>{record.description}</p>;
const title = () => 'Here is title';
const showHeader = true;
const footer = () => 'Here is footer';
const scroll = { y: 240 };
const pagination = { position: 'bottom' };

export default class Tables extends Component {
  state = {
    bordered: false,
    loading: false,
    pagination,
    size: 'default',
    expandedRowRender,
    title: undefined,
    showHeader,
    footer,
    rowSelection: {},
    scroll: undefined,
    hasData: true,
  }

  handleToggle = prop => (enable) => {
    this.setState({ [prop]: enable });
  }

  handleSizeChange = (e) => {
    this.setState({ size: e.target.value });
  }

  handleExpandChange = (enable) => {
    this.setState({ expandedRowRender: enable ? expandedRowRender : undefined });
  }

  handleTitleChange = (enable) => {
    this.setState({ title: enable ? title : undefined });
  }

  handleHeaderChange = (enable) => {
    this.setState({ showHeader: enable ? showHeader : false });
  }

  handleFooterChange = (enable) => {
    this.setState({ footer: enable ? footer : undefined });
  }

  handleRowSelectionChange = (enable) => {
    this.setState({ rowSelection: enable ? {} : undefined });
  }

  handleScollChange = (enable) => {
    this.setState({ scroll: enable ? scroll : undefined });
  }

  handleDataChange = (hasData) => {
    this.setState({ hasData });
  }

  handlePaginationChange = (e) => {
    const { value } = e.target;
    this.setState({
      pagination: value === 'none' ? false : { position: value },
    });
  }

  render() {
    const state = this.state;

    return (
      <>
        <Card>
          <Table
            columns={columns}
            dataSource={data}
            bordered
            size="middle"
          />
        </Card>
        <Card>
          <div className="components-table-demo-control-bar">
            <Form layout="inline">
              <FormItem label="Bordered">
                <Switch checked={state.bordered} onChange={this.handleToggle('bordered')} />
              </FormItem>
              <FormItem label="loading">
                <Switch checked={state.loading} onChange={this.handleToggle('loading')} />
              </FormItem>
              <FormItem label="Title">
                <Switch checked={!!state.title} onChange={this.handleTitleChange} />
              </FormItem>
              <FormItem label="Column Header">
                <Switch checked={!!state.showHeader} onChange={this.handleHeaderChange} />
              </FormItem>
              <FormItem label="Footer">
                <Switch checked={!!state.footer} onChange={this.handleFooterChange} />
              </FormItem>
              <FormItem label="Expandable">
                <Switch checked={!!state.expandedRowRender} onChange={this.handleExpandChange} />
              </FormItem>
              <FormItem label="Checkbox">
                <Switch checked={!!state.rowSelection} onChange={this.handleRowSelectionChange} />
              </FormItem>
              <FormItem label="Fixed Header">
                <Switch checked={!!state.scroll} onChange={this.handleScollChange} />
              </FormItem>
              <FormItem label="Has Data">
                <Switch checked={!!state.hasData} onChange={this.handleDataChange} />
              </FormItem>
              <FormItem label="Size">
                <Radio.Group size="default" value={state.size} onChange={this.handleSizeChange}>
                  <Radio.Button value="default">Default</Radio.Button>
                  <Radio.Button value="middle">Middle</Radio.Button>
                  <Radio.Button value="small">Small</Radio.Button>
                </Radio.Group>
              </FormItem>
              <FormItem label="Pagination">
                <Radio.Group
                  value={state.pagination ? state.pagination.position : 'none'}
                  onChange={this.handlePaginationChange}
                >
                  <Radio.Button value="top">Top</Radio.Button>
                  <Radio.Button value="bottom">Bottom</Radio.Button>
                  <Radio.Button value="both">Both</Radio.Button>
                  <Radio.Button value="none">None</Radio.Button>
                </Radio.Group>
              </FormItem>
            </Form>
          </div>
          <Table {...this.state} columns={columnsTable2} dataSource={state.hasData ? dataTable2 : null} />
        </Card>
      </>
    )
  }
}

const columnsTable2 = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  width: 150,
  render: text => <a href="javascript:;">{text}</a>,
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
  width: 70,
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
}, {
  title: 'Action',
  key: 'action',
  width: 360,
  render: (text, record) => (
    <span>
      <a href="javascript:;">Action 一 {record.name}</a>
      <Divider type="vertical" />
      <a href="javascript:;">Delete</a>
      <Divider type="vertical" />
      <a href="javascript:;" className="ant-dropdown-link">
        More actions <Icon type="down" />
      </a>
    </span>
  ),
}];

const dataTable2 = [];
for (let i = 1; i <= 10; i++) {
  dataTable2.push({
    key: i,
    name: 'John Brown',
    age: `${i}2`,
    address: `New York No. ${i} Lake Park`,
    description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
  });
}

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  width: 100,
  fixed: 'left',
  filters: [{
    text: 'Joe',
    value: 'Joe',
  }, {
    text: 'John',
    value: 'John',
  }],
  onFilter: (value, record) => record.name.indexOf(value) === 0,
}, {
  title: 'Other',
  children: [{
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: 200,
    sorter: (a, b) => a.age - b.age,
  }, {
    title: 'Address',
    children: [{
      title: 'Street',
      dataIndex: 'street',
      key: 'street',
      width: 200,
    }, {
      title: 'Block',
      children: [{
        title: 'Building',
        dataIndex: 'building',
        key: 'building',
        width: 100,
      }, {
        title: 'Door No.',
        dataIndex: 'number',
        key: 'number',
        width: 100,
      }],
    }],
  }],
}, {
  title: 'Company',
  children: [{
    title: 'Company Address',
    dataIndex: 'companyAddress',
    key: 'companyAddress',
  }, {
    title: 'Company Name',
    dataIndex: 'companyName',
    key: 'companyName',
  }],
}, {
  title: 'Gender',
  dataIndex: 'gender',
  key: 'gender',
  width: 80,
  fixed: 'right',
}];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: 'John Brown',
    age: i + 1,
    street: 'Lake Park',
    building: 'C',
    number: 2035,
    companyAddress: 'Lake Street 42',
    companyName: 'SoftLake Co',
    gender: 'M',
  });
}