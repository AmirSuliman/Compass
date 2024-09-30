import React from 'react';
import Dropdown from './components/Dropdown'; // Import the Dropdown component
import LineChartComponent from './components/LineChart';
import ComponentCard from './components/ComponentCard';
import CompleteSurvey from './components/CompleteSurvey';
import AgeDistribution from './components/AgeDistribution';

export default function Surveys() {
  return (
    <div className="p-4">
      <div className="flex justify-end">
        <Dropdown />
      </div>
      <div className="flex flex-col md:flex-row w-full gap-6 mt-8"> {/* Flex container with gap */}
      <div className="w-full md:w-3/4 flex-shrink-0"> {/* Full width on small screens */}
        <LineChartComponent />
      </div>
      <div className="w-full md:w-1/4 flex-shrink-0"> {/* Full width on small screens */}
        <ComponentCard />
      </div>
    </div>
     <CompleteSurvey/>
     <AgeDistribution/> 
    </div>
  );
}
