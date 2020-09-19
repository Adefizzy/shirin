import React from 'react';
import { ResponsivePie } from '@nivo/pie'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const data = [
    {
      "id": "php",
      "label": "php",
      "value": 63,
      "color": "hsl(253, 100%, 61%)"
    },
    {
      "id": "elixir",
      "label": "elixir",
      "value": 8,
      "color": "hsl(44, 100%, 49%)"
    },
  ]
  /* colors={['#f7b500', '#6236ff']} */
  export const PieChart = (props) => (
  /*   <div style={{height: '90%', width: '90%'}}> */
  <ResponsivePie
  data={data}
  margin={{right: 5,left: 5 }}
  colors={['#f7b500', '#6236ff']}
  innerRadius={0.50}
  borderWidth={1}
  borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
  enableRadialLabels={false}
  sliceLabel='id'
  slicesLabelsSkipAngle={10}
  slicesLabelsTextColor="#fff"
  animate={true}
  motionStiffness={90}
  motionDamping={15}
  defs={[
      {
          id: 'dots',
          type: 'patternDots',
          background: 'inherit',
          color: 'rgba(255, 255, 255, 0.3)',
          size: 4,
          padding: 1,
          stagger: true
      },
      {
          id: 'lines',
          type: 'patternLines',
          background: 'inherit',
          color: 'rgba(255, 255, 255, 0.3)',
          rotation: -45,
          lineWidth: 6,
          spacing: 10
      }
  ]}
 /*  fill={[
      {
          match: {
              id: 'ruby'
          },
          id: 'dots'
      },
      {
          match: {
              id: 'c'
          },
          id: 'dots'
      },
      {
          match: {
              id: 'go'
          },
          id: 'dots'
      },
      {
          match: {
              id: 'python'
          },
          id: 'dots'
      },
      {
          match: {
              id: 'scala'
          },
          id: 'lines'
      },
      {
          match: {
              id: 'lisp'
          },
          id: 'lines'
      },
      {
          match: {
              id: 'elixir'
          },
          id: 'lines'
      },
      {
          match: {
              id: 'javascript'
          },
          id: 'lines'
      }
  ]}
  legends={[
      {
          anchor: 'bottom',
          direction: 'row',
          translateY: 56,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: '#999',
          symbolSize: 18,
          symbolShape: 'circle',
          effects: [
              {
                  on: 'hover',
                  style: {
                      itemTextColor: '#000'
                  }
              }
          ]
      }
  ]} */
/>
   /*   </div> */
)