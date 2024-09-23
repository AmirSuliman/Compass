import {
  ChartNoAxesCombined,
  MoveUpRight,
  UserPlus,
  UserRoundMinus,
} from "lucide-react"

const GrowthCards = () => {
  const growthData = [
    {
      icon: <ChartNoAxesCombined color='blue' />,
      label: "Growth",
      value: "23,430",
      growthValue: "+412",
      percentage: "23%",
    },
    {
      icon: <UserPlus color='blue' />,
      label: "Follow",
      value: "23,430",
      growthValue: "+412",
      percentage: "23%",
    },
    {
      icon: <UserRoundMinus color='blue' />,
      label: "Unfollow",
      value: "23,430",
      growthValue: "+412",
      percentage: "23%",
    },
  ]
  
  return (
    <>
      {growthData.map((item, index) => (
        <div
          key={index}
          className='flex gap-4 border justify-between md:justify-start border-gray-300 rounded-md p-4'
        >
          <div>
            {item.icon}
            <div className='text-xs'>{item.label}</div>
          </div>
          <div>
            <div className='font-bold'>{item.value}</div>
            <div className='flex text-xs'>
              <span className='text-xs'>{item.growthValue}</span>
              <span className='flex'>
                <MoveUpRight color='blue' size={16} />
                <span className='text-blue-500 text-xs'>{item.percentage}</span>
              </span>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default GrowthCards
