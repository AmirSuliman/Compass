import React, { useState } from "react"
import Home from "./home"

const Suggestions = () => {
  const [activeTab, setActiveTab] = useState("Suggestions")

  const tabs = [
    "Suggestions",
    "Surveys",
    "Feedback",
    "Comments For Imporvements",
  ]

  return (
    <div>
      <div className='w-full border-b border-gray-300'>
        <div className='flex text-sm space-x-2 md:space-x-8'>
          {tabs.map((tab) => (
            <div
              key={tab}
              className={`pb-2 border-b-2 transition-colors duration-200 cursor-pointer ${
                activeTab === tab
                  ? "border-blue-600"
                  : "border-transparent hover:border-blue-600"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              <button
                className={`transition-colors duration-200 ${
                  activeTab === tab
                    ? "text-blue-600"
                    : "text-gray-500 hover:text-blue-600"
                }`}
              >
                {tab}
              </button>
            </div>
          ))}
        </div>
      </div>

      {activeTab === "Suggestions" && <Home />}

      {activeTab === "Surveys" && '<PublishedVideos />'}

      {activeTab === "Feedback" && '<ViewedVideos />'}

      {activeTab === "Comments For Imporvements" && '<Competitors />'}
    </div>
  )
}

export default Suggestions
