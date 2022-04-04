import React from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import useData from '../../hooks/useData';
import './Dashboard.css'

const Dashboard = () => {
    const [data, setData] = useData();
    return (
        <div className='dashboard'>

            <div className='chart'>
                <h3 className='title'>Month wise Sell</h3>
                <ResponsiveContainer
                    width="100%"
                    height={300}
                >
                    <LineChart
                        data={data}
                        margin={{
                            top: 5,
                            right: 50,
                            left: 0,
                            bottom: 5,
                        }}
                    >
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line
                            isAnimationActive={false}
                            type="monotone" dataKey="sell"
                            stroke="#8884d8"
                            strokeWidth={2}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>

            <div className='chart'>
                <h3 className='title'>Investment VS Revenue</h3>
                <ResponsiveContainer
                    width="100%"
                    height={300}
                >
                    <AreaChart
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Area
                            type="monotone"
                            dataKey="investment"
                            stackId="1"
                            stroke="#8884d8"
                            fill="#8884d8"
                        />
                        <Area
                            type="monotone"
                            dataKey="revenue"
                            stackId="1"
                            stroke="#82ca9d"
                            fill="#82ca9d"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>

            <div className='chart'>
                <h3 className='title'>Investment VS Revenue</h3>
                <ResponsiveContainer
                    width="100%"
                    height={300}
                >
                    <BarChart
                        data={data}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar
                            dataKey="investment"
                            stackId="a"
                            fill="#8884d8"
                        />
                        <Bar
                            dataKey="revenue"
                            stackId="a"
                            fill="#82ca9d"
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <div className='chart'>
                <h3 className='title'>Investment VS Revenue</h3>
                <ResponsiveContainer
                    width="100%"
                    height={300}
                >
                    <PieChart>
                        <Pie
                            data={data}
                            dataKey="investment"
                            outerRadius={60}
                            fill="#8884d8"
                        />
                        <Pie
                            isAnimationActive={false}
                            data={data}
                            dataKey="revenue"
                            innerRadius={70}
                            outerRadius={90}
                            fill="#82ca9d"
                            label
                        />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Dashboard;