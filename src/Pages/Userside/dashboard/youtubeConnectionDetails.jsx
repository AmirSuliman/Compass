import React, { useState } from 'react';
import DefaultLayout from '../../../Layout/UserLayout';
import {
  ChartNoAxesCombined,
  MoveUpRight,
  UserPlus,
  UserRoundMinus,
} from 'lucide-react';
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from 'recharts';

const YoutubeConnectionDetails = () => {
  const [activeTab, setActiveTab] = useState('Community');

  const tabs = [
    'Community',
    'Published Videos',
    'Viewed Videos',
    'Competetiors',
  ];

  const data = [
    { name: 'Dec 18', uv: 10000, pv: 24000 },
    { name: 'Dec 19', uv: 20000, pv: 32000 },
    { name: 'Dec 20', uv: 30000, pv: 37000 },
    { name: 'Dec 21', uv: 15000, pv: 42000 },
    { name: 'Dec 22', uv: 25000, pv: 48000 },
    { name: 'Dec 23', uv: 18000, pv: 39000 },
    { name: 'Dec 24', uv: 23000, pv: 45000 },
  ];

  return (
    <DefaultLayout>
      {/* Tabs */}
      <div className="w-full border-b border-gray-300">
        <div className="flex space-x-8">
          {tabs.map((tab) => (
            <div
              key={tab}
              className={`pb-2 border-b-2 transition-colors duration-200 cursor-pointer ${
                activeTab === tab
                  ? 'border-blue-600'
                  : 'border-transparent hover:border-blue-600'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              <button
                className={`transition-colors duration-200 ${
                  activeTab === tab
                    ? 'text-blue-600'
                    : 'text-gray-500 hover:text-blue-600'
                }`}
              >
                {tab}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white py-4 px-8 rounded-md mt-6">
        <div>
          <div className="font-bold">Growth</div>
          <div className="flex justify-between">
            <div>
              <div className="font-semibold">Net Growth</div>
              <div>Jun 2023 - Dec 2023</div>
            </div>
            <div className="flex gap-4">
              <div className="flex gap-4 border border-gray-300 rounded-md p-4">
                <div>
                  <ChartNoAxesCombined color="blue" />
                  <div>Growth</div>
                </div>
                <div>
                  <div className="font-bold">23,430</div>
                  <div className="flex text-xs">
                    <span>+412</span>
                    <span className="flex">
                      <MoveUpRight color="blue" size={16} />
                      <span className="text-blue-500">23%</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 border border-gray-300 rounded-md p-4">
                <div>
                  <UserPlus color="blue" />
                  <div>Follow</div>
                </div>
                <div>
                  <div className="font-bold">23,430</div>
                  <div className="flex text-xs">
                    <span>+412</span>
                    <span className="flex">
                      <MoveUpRight color="blue" size={16} />
                      <span className="text-blue-500">23%</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 border border-gray-300 rounded-md p-4">
                <div>
                  <UserRoundMinus color="blue" />
                  <div>Unfollow</div>
                </div>
                <div>
                  <div className="font-bold">23,430</div>
                  <div className="flex text-xs">
                    <span>+412</span>
                    <span className="flex">
                      <MoveUpRight color="blue" size={16} />
                      <span className="text-blue-500">23%</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Updated ResponsiveContainer with fixed height */}
        <div className="h-64 mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis ticks={[0, 1500, 3000, 15000, 25000, 50000]} />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" fill="#8884d8" />
              <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default YoutubeConnectionDetails;
