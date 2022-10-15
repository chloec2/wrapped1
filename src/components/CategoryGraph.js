import React from 'react'
import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line, PieChart, Pie, Cell } from 'recharts'
import "./CategoryGraph.css"


const data01 = [
  { name: 'Group A', value: Math.floor(Math.random() * 100) },
  { name: 'Group B', value: Math.floor(Math.random() * 100) },
];
const COLORS = ['rgb(255, 92, 80)', '#5fa078'];

const data = {
    "Food": [
        {
            "name": "Jan",
            "Total Spent": 800,
            "Category Spent": 233,
        },
        {
            "name": "Feb",
            "Total Spent": 680,
            "Category Spent": 105,
        },
        {
            "name": "Mar",
            "Total Spent": 720,
            "Category Spent": 255,
        },
        {
            "name": "Apr",
            "Total Spent": 500,
            "Category Spent": 323,
        },
        {
            "name": "May",
            "Total Spent": 221,
            "Category Spent": 98,
        },
        {
            "name": "Jun",
            "Total Spent": 433,
            "Category Spent": 82,
        },
        {
            "name": "Jul",
            "Total Spent": 577,
            "Category Spent": 101,
        },
        {
            "name": "Aug",
            "Total Spent": 662,
            "Category Spent": 183,
        },
        {
            "name": "Sep",
            "Total Spent": 822,
            "Category Spent": 200,
        },
        {
            "name": "Oct",
            "Total Spent": 101,
            "Category Spent": 20,
        },
        {
            "name": "Nov",
            "Total Spent": 800,
            "Category Spent": 233,
        },
        {
            "name": "Dec",
            "Total Spent": 332,
            "Category Spent": 54,
        }
    ]
}


const CategoryGraph = ({ categoryName }) => {

  // TODO: Create functions to query the data from the backend for specific category
  // then sort through data to get total spent and category spent for specific month

  return (
    <div className='baseInfo'>
      <div className='budgetInfo'>
        <div>

        </div>
        <div className='bargraph'>
          <div>
            <div className='spendingTitle'>
              <p>Spending History on {categoryName}</p>
            </div>
            <LineChart width={800} height={275} data={data[categoryName]}
              margin={{ top: 5, right: 30, left: 20, bottom: -2 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" tick={{ fontSize: 17 }} />
              <YAxis tick={{ fontSize: 17 }} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="Total Spent" stroke="#D22E1E" />
              <Line type="monotone" dataKey="Category Spent" stroke="#82ca9d" />
            </LineChart>
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
            {data01.map((entry, index) => (
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

export default CategoryGraph
