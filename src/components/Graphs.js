import React from 'react'
import { BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar, Pie, PieChart, Cell } from 'recharts';
import "./Graphs.css";
const data01 = [
  { name: 'Group A', value: 800 },
  { name: 'Group B', value: 200 },
];
const COLORS = ['rgb(255, 92, 80)', '#5fa078'];

const Graphs = () => {

  const data = [
    {
      "name": "Jan",
      "Total Spent Monthly": 400,
      "Average Spent Weekly": 100.32
    },
    {
      "name": "Feb",
      "Total Spent Monthly": 272,
      "Average Spent Weekly": 42.23
    },
    {
      "name": "Mar",
      "Total Spent Monthly": 100,
      "Average Spent Weekly": 24.75
    },
    {
      "name": "Apr",
      "Total Spent Monthly": 564,
      "Average Spent Weekly": 70.43
    },
    {
      "name": "May",
      "Total Spent Monthly": 276,
      "Average Spent Weekly": 54.32
    },
    {
      "name": "Jun",
      "Total Spent Monthly": 345,
      "Average Spent Weekly": 45.43
    },
    {
      "name": "Jul",
      "Total Spent Monthly": 374,
      "Average Spent Weekly": 98.2
    },
    {
      "name": "Aug",
      "Total Spent Monthly": 255,
      "Average Spent Weekly": 52.30
    },
    {
      "name": "Sep",
      "Total Spent Monthly": 165,
      "Average Spent Weekly": 43.35
    },
    {
      "name": "Oct",
      "Total Spent Monthly": 560,
      "Average Spent Weekly": 100.40
    },
    {
      "name": "Nov",
      "Total Spent Monthly": 678,
      "Average Spent Weekly": 190.00
    },
    {
      "name": "Dec",
      "Total Spent Monthly": 956,
      "Average Spent Weekly": 273.92
    }
  ];

  return (
    <div className='baseInfo'>
      <div className='budgetInfo'>
        <div className='statistics'>
          <div >
            <h1 className='stat'>$ -24,000</h1>
            <p className='label1'>Expenses</p>
          </div>
          <div >
            <h1 className='stat'>$ 10,500</h1>
            <p className='label2'>Expenses & Revenue</p>
          </div>
          <div className='stat'>
            <h1 className='stat'>$ 14,445</h1>
            <p className='label3'>Revenue</p>
          </div>

        </div>
        <div className='bargraph'>
          <div>
            <BarChart width={830} height={250} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Total Spent Monthly" fill="#8884d8" />
              <Bar dataKey="Average Spent Weekly" fill="#82ca9d" />
            </BarChart>
          </div>
        </div>
      </div>
      <div className='pie'>
        <div className='budgetTitle'>
          <p>Budget</p>
        </div>
        <PieChart width={400} height={270}>
          <Pie
            data={data01}
            cx={"50%"}
            cy={"50%"}
            innerRadius={80}
            outerRadius={100}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
        <div className="budgetText">
          <div>
            <p>${data01[0].value} Spent</p>
          </div>
          <div>
            <p>${data01[1].value} Remaining</p>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Graphs