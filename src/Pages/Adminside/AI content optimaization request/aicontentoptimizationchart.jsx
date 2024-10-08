import {
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    LineChart,
    Line
} from "recharts";

const data = [
    { name: "Dec 18",  Contentcontentsoptimizationrequests: 2000 },
    { name: "Dec 19",  Contentcontentsoptimizationrequests: 4000 },
    { name: "Dec 20",  Contentcontentsoptimizationrequests: 6000 },
    { name: "Dec 21", Contentcontentsoptimizationrequests: 2000 }, 
    { name: "Dec 22", Contentcontentsoptimizationrequests: 9000 },
    { name: "Dec 23",  Contentcontentsoptimizationrequests: 12000 },
    { name: "Dec 24",  Contentcontentsoptimizationrequests: 15000 },
    { name: "Dec 25",  Contentcontentsoptimizationrequests: 14000 },
    { name: "Dec 26",  Contentcontentsoptimizationrequests: 13000 },
    { name: "Dec 27",  Contentcontentsoptimizationrequests: 12000 },
    { name: "Dec 28",  Contentcontentsoptimizationrequests: 15000 },
];

const AicontentLinechart = () => {
    return (
        <div className='h-96 mt-4 md:mt-8'>
            <ResponsiveContainer width='100%' height='100%'>
                <LineChart data={data}>
                    {/* Horizontal dashed grid lines */}
                    <CartesianGrid strokeDasharray='3 3' vertical={false} />
                    <XAxis dataKey='name' tick={{ fontSize: 12 }} />
                    <YAxis
                        tickFormatter={(value) => `${value}`}
                        className='text-xs md:text-base'
                    />
                    <Tooltip formatter={(value) => `${value}`} />
                    <Line
                        type='monotone'
                        dataKey='Contentcontentsoptimizationrequests'
                        stroke='#FFA500'
                        strokeWidth={3}
                        dot={{ stroke: "#fff", strokeWidth: 2, r: 5 }}
                        activeDot={{ r: 8 }}
                        connectNulls={true} 
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default AicontentLinechart;
