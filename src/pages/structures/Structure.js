import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { select } from '../../store';

class Structure extends Component {
  componentDidMount() {
    const { getStructureById, id } = this.props;

    getStructureById(id);
  }

  render() {
    const { structure } = this.props;

    if (!structure) {
      return null;
    }

    console.log(structure);

    return (
      <code>
        <pre>{JSON.stringify(structure, null, 4)}</pre>
      </code>
    );
  }
}

const mapState = (
  state,
  {
    match: {
      params: { id }
    }
  }
) => ({
  structure: select.structures.getJSONSchemaById(state, id),
  id
});

const mapDispatch = ({ structures }) => ({
  getStructureById: id => structures.getByIdAsync({ id })
});

Structure.propTypes = {
  // eslint-disable-next-line
  structure: PropTypes.object,
  id: PropTypes.string.isRequired,
  getStructureById: PropTypes.func.isRequired
};

export default connect(
  mapState,
  mapDispatch
)(Structure);
