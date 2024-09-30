import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

// Sample data for the area chart with x-axis from 10 to 24
const data = [
  { date: '10', height: 4000 },
  { date: '11', height: 50000 },
  { date: '12', height: 10000 },
  { date: '13', height: 10080 },
  { date: '14', height: 90000 },
  { date: '15', height: 60000 },
  { date: '16', height: 33000 },
  { date: '17', height: 20000 },
  { date: '18', height: 75000 },
  { date: '19', height: 45000 },
  { date: '20', height: 60000 },
  { date: '21', height: 33000 },
  { date: '22', height: 70000 },
  { date: '23', height: 30000 },
  { date: '24', height: 90000 },
];

const parseTimeLabels = (tick) => `${tick}`; // Formatting X-axis labels without 'h'

export default function LineChartComponent() {
    return (
        <div className="rounded-2xl shadow-lg p-4 bg-white h-[60vh]">
            {/* Container for Headings and Filter Options */}
            <div className="flex justify-between items-center mb-4">
                {/* Stacked Headings */}
                <div>
                    <h2 className="text-lg text-[#9291A5] font-semibold">Statistics</h2>
                    <h3 className="text-xl font-bold text-[#1E1B39]">Survey</h3>
                </div>

                {/* Filter Options */}
                <div className="flex space-x-2 sm:space-x-4">
                    <button className="px-3 py-2 rounded-md bg-[#F2F2F2] text-[#555555] text-sm sm:text-base">
                        Last 7 Days
                    </button>
                    <button className="px-3 py-2 rounded-md text-[#849AA9] text-sm sm:text-base">
                        This Month
                    </button>
                    <button className="px-3 py-2 rounded-md text-[#849AA9] text-sm sm:text-base">
                        Last 9 Months
                    </button>
                </div>
            </div>

            {/* Area Chart */}
            <div style={{ width: '100%', height: '300px' }}>
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <defs>
                            <linearGradient id="fillGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#3182ce" stopOpacity={1} />
                                <stop offset="95%" stopColor="#FFFFFF" stopOpacity={1} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 0" opacity={0.2} />
                        <XAxis dataKey="date" tickFormatter={parseTimeLabels} />
                        <YAxis
                            domain={[0, 100000]} // Set the domain for Y-axis from 0 to 100,000
                            ticks={[0, 20000, 40000, 60000, 80000, 100000]} // Specify ticks for Y-axis
                            tickFormatter={(value) => (value === 0 ? value : `${value / 1000}k`)} // Format Y-axis labels
                        />
                        <Tooltip />
                        <Legend />
                        <Area
                            type="linear"
                            dataKey="height"
                            stroke="#3180F5" // Line color
                            fillOpacity={1}
                            fill="url(#fillGradient)" // Fill gradient
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}