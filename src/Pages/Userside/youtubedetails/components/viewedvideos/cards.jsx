import { MoveUpRight } from "lucide-react"

const Cards = () => {
  const growthData = [
    {
      value: "23,430",
      label: "Video Views",
      icon: <MoveUpRight color='blue' size={16} />,
      percentage: "23%",
    },
    {
      value: "23,430",
      label: "Like",
      icon: <MoveUpRight color='blue' size={16} />,
      percentage: "23%",
    },
    {
      value: "23,430",
      label: "Dislike",
      icon: <MoveUpRight color='blue' size={16} />,
      percentage: "23%",
    },
    {
      value: "23,430",
      label: "Comments",
      icon: <MoveUpRight color='blue' size={16} />,
      percentage: "23%",
    },
    {
      value: "23,430",
      label: "Dislike",
      icon: <MoveUpRight color='blue' size={16} />,
      percentage: "23%",
    },
    {
      value: "23,430",
      label: "Comments",
      icon: <MoveUpRight color='blue' size={16} />,
      percentage: "23%",
    },
  ]

  return (
    <>
      {growthData?.map((item, index) => (
        <div
          key={index}
          className='flex-1 border justify-between md:justify-start border-gray-300 rounded-md p-4'
        >
          <div className="text-[#01A9FC]">{item.value}</div>
          <div className="flex gap-2 justify-between">
            <div className="text-xs">
              {item.label}
            </div>
            <div className="flex gap-2 items-center">
              {item.icon}
              <div className="text-xs">{item.percentage}</div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default Cards
