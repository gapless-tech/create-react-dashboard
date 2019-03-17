import React from 'react';
import PropTypes from 'prop-types';
import { Collapse } from 'antd';

const { Panel } = Collapse;

const StructuresPanel = ({ name }) => (
  <Panel header={name} key={name}>
    <div>asdfasdf</div>
  </Panel>
);

StructuresPanel.propTypes = {
  name: PropTypes.string.isRequired
};

export default StructuresPanel;
