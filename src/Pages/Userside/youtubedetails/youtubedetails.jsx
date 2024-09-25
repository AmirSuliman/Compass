import React, { useState } from "react"

import Community from "./components/community"
import PublishedVideos from "./components/publishedvideos"
import ViewedVideos from "./components/viewedvideos"
import Competitors from "./components/competitors"

const Youtubedetails = () => {
  const [activeTab, setActiveTab] = useState("Community")

  const tabs = [
    "Community",
    "Published Videos",
    "Viewed Videos",
    "Competetiors",
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

      {activeTab === "Community" && <Community />}

      {activeTab === "Published Videos" && <PublishedVideos />}

      {activeTab === "Viewed Videos" && <ViewedVideos />}

      {activeTab === "Competetiors" && <Competitors />}
    </div>
  )
}

export default Youtubedetails
