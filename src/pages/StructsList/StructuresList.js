import React from 'react';
import PropTypes from 'prop-types';
// Components
import { Collapse } from 'antd';
import StructurePanel from 'components/panels/StructurePanel';

const StructuresList = ({ structs }) => (
  <Collapse>
    {structs.map(({ name, value }) => (
      <StructurePanel key={name} name={name} structure={value} />
    ))}
  </Collapse>
);

StructuresList.propTypes = {
  structs: PropTypes.arrayOf(PropTypes.object)
};

StructuresList.defaultProps = {
  structs: [
    { name: 'Que cena 1', value: 'a' },
    { name: 'Que cena 2', value: 'b' }
  ]
};

export default StructuresList;
