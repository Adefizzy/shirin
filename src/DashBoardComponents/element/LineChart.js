/* import React from 'react';
import styled from 'styled-components';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
    name: 'wk 1', views: 50,  amt: 240,
  },
  {
    name: 'wk 2', views: 300, amt: 221,
  },
  {
    name: 'wk 3', views: 200,  amt: 229,
  },
  {
    name: 'wk 4', views: 278,  amt: 200,
  },
  {
    name: 'wk 5', views: 189,  amt: 218,
  },
  {
    name: 'wk 6', views: 239, amt: 250,
  },
  {
    name: 'wk 7', views: 349, amt: 210,
  },
];



export const LineChartt = (props) =>  {

    return (
      <LineChart
        width={728}
        height={400}
        data={data}
        margin={{
          top: 5, right:5, left: 0, bottom: 0,
        }}
    
      >
        <CartesianGrid strokeDasharray="0" vertical={false} />
        <XAxis dataKey={props.XDataKey} axisLine={false} tickLine={false} />
        <YAxis axisLine={false}tickLine={false} tick={{stroke: '#eff0f2', strokeWidth: 0}}/>
        <Tooltip />
     
        <Line type="monotone" dataKey={props.YdataKey} stroke="#6CBBEE" strokeWidth={2}/>
      </LineChart>
    );
}
 */


import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
    name: 'Jan', uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: 'Feb', uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: 'Mar', uv: 2000, pv: 9800, amt: 2290,
  },
  {
    name: 'Apr', uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: 'May', uv: 1890, pv: 4800, amt: 2181,
  },
  {
    name: 'Jun', uv: 2390, pv: 3800, amt: 2500,
  },
  {
    name: 'Jul', uv: 3490, pv: 4300, amt: 2100,
  },
  {
    name: 'Aug', uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: 'Sept', uv: 2000, pv: 9800, amt: 2290,
  },
  {
    name: 'Oct', uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: 'Nov', uv: 3490, pv: 4300, amt: 2100,
  },
  {
    name: 'Dec', uv: 3490, pv: 4300, amt: 2100,
  },
];

export  const LineChartt = (props) =>   {

    return (
      <LineChart
        width={props.width}
        height={300}
        data={data}
        margin={{
          top: 30, right: 50, left: 20, bottom: 0,
        }}
      >
        <XAxis axisLine={false} tickLine={false}  dataKey="name" />
        <Tooltip />
        <Line strokeWidth={2} type="monotone" dataKey="pv" stroke="#6236ff" activeDot={{ r: 5 }} />
      </LineChart>
    );

}