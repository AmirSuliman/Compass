const worldMapData = [
  {
    country: "Filipina",
    progress: 70,
    noOfUsers: "12k",
  },
  {
    country: "Thailand",
    progress: 60,
    noOfUsers: "106k",
  },
  {
    country: "Japan",
    progress: 30,
    noOfUsers: "16k",
  },
  {
    country: "Russia",
    progress: 55,
    noOfUsers: "16k",
  },
]

const MapData = () => {
  return (
    <>
      {worldMapData?.map((data) => (
        <div>
          <div>{data.country}</div>
          <div className='flex items-center'>
            <div className='bg-gray-200 h-3 rounded-full w-full max-w-[80%] md:max-w-[90%]'>
              <div
                className='bg-blue-500 h-3 rounded-tl-full rounded-bl-full'
                style={{ width: `${data.progress}%` }}
              ></div>
            </div>
            <div className='ml-4 font-bold'>{data.noOfUsers}</div>
          </div>
        </div>
      ))}
    </>
  )
}

export default MapData
