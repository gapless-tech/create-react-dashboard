import React, { Component } from 'react';
import { ResponsiveLine } from '@nivo/line';

export default class Line extends Component {
  render() {
    return (
      <div style={this.props.height}>
        <ResponsiveLine
          data={data}
          margin={{
              "top": 50,
              "right": 110,
              "bottom": 50,
              "left": 60
          }}
          xScale={{
              "type": "point"
          }}
          yScale={{
              "type": "linear",
              "stacked": true,
              "min": "auto",
              "max": "auto"
          }}
          curve="natural"
          axisTop={null}
          axisRight={null}
          axisBottom={{
              "orient": "bottom",
              "tickSize": 5,
              "tickPadding": 5,
              "tickRotation": 0,
              "legend": "transportation",
              "legendOffset": 36,
              "legendPosition": "middle"
          }}
          axisLeft={{
              "orient": "left",
              "tickSize": 5,
              "tickPadding": 5,
              "tickRotation": 0,
              "legend": "count",
              "legendOffset": -40,
              "legendPosition": "middle"
          }}
          dotSize={10}
          dotColor="inherit:darker(0.3)"
          dotBorderWidth={2}
          dotBorderColor="#ffffff"
          enableDotLabel={true}
          dotLabel="y"
          dotLabelYOffset={-12}
          animate={true}
          motionStiffness={90}
          motionDamping={15}
          legends={[
            {
              "anchor": "bottom-right",
              "direction": "column",
              "justify": false,
              "translateX": 100,
              "translateY": 0,
              "itemsSpacing": 0,
              "itemDirection": "left-to-right",
              "itemWidth": 80,
              "itemHeight": 20,
              "itemOpacity": 0.75,
              "symbolSize": 12,
              "symbolShape": "circle",
              "symbolBorderColor": "rgba(0, 0, 0, .5)",
              "effects": [
                {
                  "on": "hover",
                  "style": {
                    "itemBackground": "rgba(0, 0, 0, .03)",
                    "itemOpacity": 1
                  }
                }
              ]
            }
          ]}
        />
      </div>
    )
  }
}

const data = [
  {
    "id": "japan",
    "color": "hsl(74, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 300
      },
      {
        "x": "helicopter",
        "y": 285
      },
      {
        "x": "boat",
        "y": 283
      },
      {
        "x": "train",
        "y": 223
      },
      {
        "x": "subway",
        "y": 82
      },
      {
        "x": "bus",
        "y": 244
      },
      {
        "x": "car",
        "y": 226
      },
      {
        "x": "moto",
        "y": 30
      },
      {
        "x": "bicycle",
        "y": 253
      },
      {
        "x": "others",
        "y": 249
      }
    ]
  },
  {
    "id": "france",
    "color": "hsl(9, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 61
      },
      {
        "x": "helicopter",
        "y": 202
      },
      {
        "x": "boat",
        "y": 231
      },
      {
        "x": "train",
        "y": 1
      },
      {
        "x": "subway",
        "y": 222
      },
      {
        "x": "bus",
        "y": 242
      },
      {
        "x": "car",
        "y": 192
      },
      {
        "x": "moto",
        "y": 52
      },
      {
        "x": "bicycle",
        "y": 173
      },
      {
        "x": "others",
        "y": 105
      }
    ]
  },
  {
    "id": "us",
    "color": "hsl(63, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 238
      },
      {
        "x": "helicopter",
        "y": 259
      },
      {
        "x": "boat",
        "y": 149
      },
      {
        "x": "train",
        "y": 78
      },
      {
        "x": "subway",
        "y": 125
      },
      {
        "x": "bus",
        "y": 251
      },
      {
        "x": "car",
        "y": 202
      },
      {
        "x": "moto",
        "y": 103
      },
      {
        "x": "bicycle",
        "y": 103
      },
      {
        "x": "others",
        "y": 283
      }
    ]
  },
  {
    "id": "germany",
    "color": "hsl(182, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 94
      },
      {
        "x": "helicopter",
        "y": 152
      },
      {
        "x": "boat",
        "y": 176
      },
      {
        "x": "train",
        "y": 40
      },
      {
        "x": "subway",
        "y": 31
      },
      {
        "x": "bus",
        "y": 171
      },
      {
        "x": "car",
        "y": 149
      },
      {
        "x": "moto",
        "y": 71
      },
      {
        "x": "bicycle",
        "y": 226
      },
      {
        "x": "others",
        "y": 253
      }
    ]
  },
  {
    "id": "norway",
    "color": "hsl(321, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 214
      },
      {
        "x": "helicopter",
        "y": 109
      },
      {
        "x": "boat",
        "y": 106
      },
      {
        "x": "train",
        "y": 100
      },
      {
        "x": "subway",
        "y": 31
      },
      {
        "x": "bus",
        "y": 284
      },
      {
        "x": "car",
        "y": 63
      },
      {
        "x": "moto",
        "y": 92
      },
      {
        "x": "bicycle",
        "y": 143
      },
      {
        "x": "others",
        "y": 48
      }
    ]
  }
]


