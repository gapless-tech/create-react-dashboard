import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import PropTypes from 'prop-types';

const Bar = ({ layout, height, axisBottomLabel, axisLeftLabel }) => {
  const data = [
    {
      country: 'AD',
      'hot dog': 108,
      'hot dogColor': 'hsl(222, 70%, 50%)',
      burger: 79,
      burgerColor: 'hsl(213, 70%, 50%)',
      sandwich: 158,
      sandwichColor: 'hsl(40, 70%, 50%)',
      kebab: 112,
      kebabColor: 'hsl(245, 70%, 50%)',
      fries: 178,
      friesColor: 'hsl(23, 70%, 50%)',
      donut: 57,
      donutColor: 'hsl(165, 70%, 50%)'
    },
    {
      country: 'AE',
      'hot dog': 151,
      'hot dogColor': 'hsl(150, 70%, 50%)',
      burger: 110,
      burgerColor: 'hsl(27, 70%, 50%)',
      sandwich: 98,
      sandwichColor: 'hsl(207, 70%, 50%)',
      kebab: 33,
      kebabColor: 'hsl(145, 70%, 50%)',
      fries: 94,
      friesColor: 'hsl(197, 70%, 50%)',
      donut: 143,
      donutColor: 'hsl(155, 70%, 50%)'
    },
    {
      country: 'AF',
      'hot dog': 82,
      'hot dogColor': 'hsl(61, 70%, 50%)',
      burger: 75,
      burgerColor: 'hsl(52, 70%, 50%)',
      sandwich: 123,
      sandwichColor: 'hsl(38, 70%, 50%)',
      kebab: 160,
      kebabColor: 'hsl(46, 70%, 50%)',
      fries: 40,
      friesColor: 'hsl(152, 70%, 50%)',
      donut: 58,
      donutColor: 'hsl(279, 70%, 50%)'
    },
    {
      country: 'AG',
      'hot dog': 98,
      'hot dogColor': 'hsl(103, 70%, 50%)',
      burger: 157,
      burgerColor: 'hsl(313, 70%, 50%)',
      sandwich: 139,
      sandwichColor: 'hsl(21, 70%, 50%)',
      kebab: 94,
      kebabColor: 'hsl(296, 70%, 50%)',
      fries: 169,
      friesColor: 'hsl(286, 70%, 50%)',
      donut: 101,
      donutColor: 'hsl(35, 70%, 50%)'
    },
    {
      country: 'AI',
      'hot dog': 74,
      'hot dogColor': 'hsl(217, 70%, 50%)',
      burger: 114,
      burgerColor: 'hsl(43, 70%, 50%)',
      sandwich: 118,
      sandwichColor: 'hsl(152, 70%, 50%)',
      kebab: 143,
      kebabColor: 'hsl(86, 70%, 50%)',
      fries: 132,
      friesColor: 'hsl(303, 70%, 50%)',
      donut: 121,
      donutColor: 'hsl(252, 70%, 50%)'
    },
    {
      country: 'AL',
      'hot dog': 59,
      'hot dogColor': 'hsl(68, 70%, 50%)',
      burger: 188,
      burgerColor: 'hsl(161, 70%, 50%)',
      sandwich: 185,
      sandwichColor: 'hsl(291, 70%, 50%)',
      kebab: 124,
      kebabColor: 'hsl(140, 70%, 50%)',
      fries: 187,
      friesColor: 'hsl(206, 70%, 50%)',
      donut: 108,
      donutColor: 'hsl(298, 70%, 50%)'
    },
    {
      country: 'AM',
      'hot dog': 81,
      'hot dogColor': 'hsl(34, 70%, 50%)',
      burger: 138,
      burgerColor: 'hsl(311, 70%, 50%)',
      sandwich: 115,
      sandwichColor: 'hsl(107, 70%, 50%)',
      kebab: 28,
      kebabColor: 'hsl(306, 70%, 50%)',
      fries: 128,
      friesColor: 'hsl(195, 70%, 50%)',
      donut: 184,
      donutColor: 'hsl(226, 70%, 50%)'
    }
  ];

  return (
    <div style={height}>
      <ResponsiveBar
        data={data}
        keys={['hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut']}
        indexBy="country"
        margin={{
          top: 20,
          right: 130,
          bottom: 50,
          left: 60
        }}
        padding={0.3}
        layout={layout}
        colors="nivo"
        colorBy="id"
        defs={[
          {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: '#38bcb2',
            size: 4,
            padding: 1,
            stagger: true
          },
          {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: '#eed312',
            rotation: -45,
            lineWidth: 6,
            spacing: 10
          }
        ]}
        fill={[
          {
            match: {
              id: 'fries'
            },
            id: 'dots'
          },
          {
            match: {
              id: 'sandwich'
            },
            id: 'lines'
          }
        ]}
        borderColor="inherit:darker(1.6)"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: axisBottomLabel,
          legendPosition: 'middle',
          legendOffset: 32
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: axisLeftLabel,
          legendPosition: 'middle',
          legendOffset: -40
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor="inherit:darker(1.6)"
        animate
        motionStiffness={90}
        motionDamping={15}
        legends={[
          {
            dataFrom: 'keys',
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: 'left-to-right',
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: 'hover',
                style: {
                  itemOpacity: 1
                }
              }
            ]
          }
        ]}
      />
    </div>
  );
};

Bar.propTypes = {
  layout: PropTypes.string.isRequired,
  // eslint-disable-next-line
  height: PropTypes.object.isRequired,
  axisBottomLabel: PropTypes.string.isRequired,
  axisLeftLabel: PropTypes.string.isRequired
};

export default Bar;
