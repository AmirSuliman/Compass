import React from 'react';
import { ArrowRight } from 'lucide-react';
import useravatar from '../../../../../../public/Logo1.png'
const surveyData = [
    { name: "Kristin Watson", completed: 7, total: 10 },
    { name: "Darlene Robertson", completed: 3, total: 10 },
    { name: "Jenny Wilson", completed: 5, total: 10 },
    { name: "Cameron Williamson", completed: 5, total: 10 },
    { name: "Wade Warren", completed: 10, total: 10 },
];

const CompleteSurvey = () => {
    return (
        <div className="p-4 bg-white rounded-2xl shadow-lg mt-8">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-md font-semibold">Complete Survey</h1>
                <div className="flex items-center">
                    <button className="text-[#356CF9] py-2 px-4 flex items-center">
                        Select All
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                </div>
            </div>

            {surveyData.map((participant, index) => (
                <div key={index} className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                        <img
                            src={useravatar} // Replace with your avatar URL
                            alt="Avatar"
                            className="rounded-full h-10 w-10 mr-3"
                        />
                        <div className="flex flex-col">
                            <p className="font-semibold">{participant.name}</p>
                            <p className="text-gray-500">{participant.completed}/{participant.total} answer done</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="relative w-32 h-2 bg-gray-200 rounded-full ml-4">
                            <div
                                className="absolute top-0 left-0 h-full bg-green-500 rounded-full"
                                style={{ width: `${(participant.completed / participant.total) * 100}%` }}
                            ></div>
                        </div>
                        <p className="ml-2 text-sm text-gray-600">{Math.round((participant.completed / participant.total) * 100)}%</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CompleteSurvey;
