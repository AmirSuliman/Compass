import { TrendingUp } from "lucide-react"
import tableImg from "/images/published-videos-table-img.png"


const listOfVideosTable = () => {

  const data = [
    {
      postImg: tableImg, // URL of the post image
      postText: "Avail 35% off", // Post description
      date: "Active", // Status or date
      videoViews: "1,807", // Number of video views
      avgViewsDuration: "2,689", // Average view duration
      likes: "8,707", // Number of likes
      dislikes: "8,707", // Number of dislikes
      comments: "8,707", // Number of comments
    },
    {
      postImg: tableImg,
      postText: "Avail 35% off",
      date: "Active",
      videoViews: "1,807",
      avgViewsDuration: "2,689",
      likes: "8,707",
      dislikes: "8,707",
      comments: "8,707",
    },
    {
      postImg: tableImg,
      postText: "Avail 35% off",
      date: "Active",
      videoViews: "1,807",
      avgViewsDuration: "2,689",
      likes: "8,707",
      dislikes: "8,707",
      comments: "8,707",
    },
    {
      postImg: tableImg,
      postText: "Avail 35% off",
      date: "Active",
      videoViews: "1,807",
      avgViewsDuration: "2,689",
      likes: "8,707",
      dislikes: "8,707",
      comments: "8,707",
    },
    {
      postImg: tableImg,
      postText: "Avail 35% off",
      date: "Active",
      videoViews: "1,807",
      avgViewsDuration: "2,689",
      likes: "8,707",
      dislikes: "8,707",
      comments: "8,707",
    },
  ]

  return (
    <table className='w-full min-w-max border-collapse text-sm md:text-base'>
      <thead>
        <tr className='text-left text-xs md:text-base table-row'>
          <th className=''></th>
          <th className='p-2'>Post</th>
          <th className='p-2'>Date</th>
          <th className='p-2'>Video Views</th>
          <th className='p-2'>Avg. views duration</th>
          <th className='p-2'>Like</th>
          <th className='p-2'>Dislike</th>
          <th className='p-2'>Comments</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index} className='border-t md:table-row'>
            <td className='p-2 flex items-center md:block'>
              <img
                src={row.postImg}
                alt='post'
                className='w-12 h-12 mr-4 rounded-md md:mr-0'
              />
            </td>
            <td className='p-2'>{row.postText}</td>
            <td className='p-2'>{row.date}</td>
            <td className='p-2'>{row.videoViews}</td>
            <td className='p-2 text-pink-500'>
              <span className='flex items-center gap-2'>
                {row.avgViewsDuration}
                <TrendingUp size={16} />
              </span>
            </td>
            <td className='p-2'>{row.likes}</td>
            <td className='p-2'>{row.dislikes}</td>
            <td className='p-2'>{row.comments}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default listOfVideosTable
