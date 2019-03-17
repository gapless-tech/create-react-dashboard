import React from 'react';
import { shallow } from 'enzyme';
import CollapsableRowList from '../index';

const mockRenderTitle = () => {};
const mockRenderBody = () => {};

const createValueAsKey = t => ({ key: t, value: t });

describe('CollapsableRowList', () => {
  it('State should have an empty array if values are undefined.', () => {
    const wrapper = shallow(
      <CollapsableRowList
        renderTitle={mockRenderTitle}
        renderBody={mockRenderBody}
      />
    );

    expect(wrapper.state()).toEqual({
      trackedValues: []
    });
  });

  it('State should have the isCollapsed property for all values as false.', () => {
    const exampleSingleValue = 'value';
    const values = [exampleSingleValue].map(createValueAsKey);
    const wrapper = shallow(
      <CollapsableRowList
        values={values}
        renderTitle={mockRenderTitle}
        renderBody={mockRenderBody}
      />
    );

    expect(wrapper.state()).toEqual({
      trackedValues: [
        {
          entry: {
            key: exampleSingleValue,
            value: exampleSingleValue
          },
          isCollapsed: false
        }
      ]
    });
  });

  it('createOnToggle creates a function that toggles the isCollapsed property for a specific value index.', () => {
    const exampleSingleValue = 'value';
    const values = [exampleSingleValue].map(createValueAsKey);
    const wrapper = shallow(
      <CollapsableRowList
        values={values}
        renderTitle={mockRenderTitle}
        renderBody={mockRenderBody}
      />
    );

    const onToggle = wrapper.instance().createOnToggle(0);

    onToggle();

    expect(wrapper.state()).toEqual({
      trackedValues: [
        {
          entry: {
            key: exampleSingleValue,
            value: exampleSingleValue
          },
          isCollapsed: true
        }
      ]
    });
  });

  it('Changing props with a keyd values keeps the toggled states.', () => {
    const valuesBefore = ['a', 'b', 'c'].map(createValueAsKey);
    const valuesAfter = ['c', 'd', 'e'].map(createValueAsKey);
    const props = {
      values: valuesBefore,
      renderTitle: mockRenderTitle,
      renderBody: mockRenderBody
    };
    const wrapper = shallow(<CollapsableRowList {...props} />);

    // Set the 'c' element as collapsed.
    const trackedValues = [...wrapper.state().trackedValues];
    const indexOfElement = trackedValues.findIndex(t => t.entry.key === 'c');

    trackedValues[indexOfElement] = {
      ...trackedValues[indexOfElement],
      isCollapsed: true
    };
    wrapper.setState({
      trackedValues
    });
    wrapper.setProps({
      ...props,
      values: valuesAfter
    });
    expect(wrapper.state()).toEqual({
      trackedValues: [
        {
          entry: {
            key: 'c',
            value: 'c'
          },
          isCollapsed: true
        },
        {
          entry: {
            key: 'd',
            value: 'd'
          },
          isCollapsed: false
        },
        {
          entry: {
            key: 'e',
            value: 'e'
          },
          isCollapsed: false
        }
      ]
    });
  });

  it('Changing props without keyd values resets the toggled states.', () => {
    const valuesBefore = ['a', 'b', 'c'];
    const valuesAfter = ['c', 'd', 'e'];
    const props = {
      values: valuesBefore,
      renderTitle: mockRenderTitle,
      renderBody: mockRenderBody
    };
    const wrapper = shallow(<CollapsableRowList {...props} />);

    // Set the 'c' element as collapsed.
    const trackedValues = [...wrapper.state().trackedValues];
    const indexOfElement = trackedValues.findIndex(t => t.entry.key === 'c');

    trackedValues[indexOfElement] = {
      ...trackedValues[indexOfElement],
      isCollapsed: true
    };
    wrapper.setState({
      trackedValues
    });
    wrapper.setProps({
      ...props,
      values: valuesAfter
    });
    expect(wrapper.state()).toEqual({
      trackedValues: [
        {
          entry: 'c',
          isCollapsed: false
        },
        {
          entry: 'd',
          isCollapsed: false
        },
        {
          entry: 'e',
          isCollapsed: false
        }
      ]
    });
  });
});
