import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class CollapsableRowList extends Component {
  state = {};

  createOnToggle = idx => () => {
    const { trackedValues: oldTrackedValues } = this.state;
    const trackedValues = [...oldTrackedValues];

    trackedValues[idx] = {
      ...trackedValues[idx],
      isCollapsed: !trackedValues[idx].isCollapsed
    };

    this.setState({
      trackedValues
    });
  };

  render() {
    const { trackedValues } = this.state;
    const { renderCollapsed, renderExpanded } = this.props;

    return (
      <div>
        {trackedValues.map(({ entry, isCollapsed }, idx) => (
          <Fragment key={entry.key}>
            {isCollapsed
              ? renderCollapsed({ entry, onToggle: this.createOnToggle(idx) })
              : renderExpanded({ entry, onToggle: this.createOnToggle(idx) })}
          </Fragment>
        ))}
      </div>
    );
  }
}

CollapsableRowList.propTypes = {
  // values: PropTypes.arrayOf(PropTypes.shape({ key: PropTypes.any })),
  renderCollapsed: PropTypes.func.isRequired,
  renderExpanded: PropTypes.func.isRequired
};

CollapsableRowList.defaultProps = {
  // values: []
};

const getIsCollapsedFromState = ({ trackedValues = [] }, key) => {
  const { isCollapsed } =
    trackedValues.find(({ entry }) => entry.key === key) || {};

  return !!isCollapsed;
};

CollapsableRowList.getDerivedStateFromProps = ({ values }, state) => ({
  trackedValues: values.map(value => ({
    entry: value,
    isCollapsed: getIsCollapsedFromState(state, value.key)
  }))
});

export default CollapsableRowList;
