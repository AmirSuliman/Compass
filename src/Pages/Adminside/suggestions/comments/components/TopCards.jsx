import { ArrowDown, ArrowUp } from "lucide-react"

const TopCards = () => {
  const cardsData = [
    {
      title: "Total comments",
      value: "4M",
      stats: {
        icon: <ArrowUp size={14} className='text-green-500' />,
        percentage: "26%",
      },
    },

    {
      title: "Comments for Improvement",
      value: "2M",
      stats: {
        icon: <ArrowDown size={14} className='text-red-500' />,
        percentage: "4%",
      },
    },

  ]

  return (
    <div className='grid gap-4 grid-cols-2'>
      {cardsData?.map((item) => (
        <div className='p-6 bg-white rounded-md shadow-md grid gap-2'>
          <div className='md:text-lg font-semibold'>{item.title}</div>
          <div className='flex items-center justify-between'>
            <div className='text-2xl md:text-4xl'>{item.value}</div>
            {item?.stats && (
              <div
                className={`flex items-center justify-center gap-1 rounded-lg px-1 py-0.5 text-white ${
                  item?.stats?.icon?.type === ArrowUp
                    ? "bg-green-100"
                    : "bg-red-100"
                }`}
              >
                {item?.stats?.icon}
                <span
                  className={`text-sm font-semibold ${
                    item?.stats?.icon?.type === ArrowUp
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {item?.stats?.percentage}
                </span>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default TopCards
