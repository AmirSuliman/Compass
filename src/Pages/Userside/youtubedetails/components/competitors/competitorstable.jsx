import { ArrowDown, TrendingUp, Youtube } from "lucide-react"
import tableImg from "/images/published-videos-table-img.png"

const CompetitorsTable = () => {
  const data = [
    {
      favorite: true, // Assume this is indicating whether it is marked as favorite
      name: "YouTube",
      subscriptions: "35.2m",
      totalView: "1,807",
      videos: "2,689",
      likes: "8,707",
      dislikes: "8,707",
      comments: "8,707",
    },
    {
      favorite: true,
      name: "YouTube",
      subscriptions: "35.2m",
      totalView: "1,807",
      videos: "2,689",
      likes: "8,707",
      dislikes: "8,707",
      comments: "8,707",
    },
    {
      favorite: true,
      name: "YouTube",
      subscriptions: "35.2m",
      totalView: "1,807",
      videos: "2,689",
      likes: "8,707",
      dislikes: "8,707",
      comments: "8,707",
    },
    {
      favorite: true,
      name: "YouTube",
      subscriptions: "35.2m",
      totalView: "1,807",
      videos: "2,689",
      likes: "8,707",
      dislikes: "8,707",
      comments: "8,707",
    },
    {
      favorite: true,
      name: "YouTube",
      subscriptions: "35.2m",
      totalView: "1,807",
      videos: "2,689",
      likes: "8,707",
      dislikes: "8,707",
      comments: "8,707",
    },
  ]

  return (
    <table className='w-full min-w-max border-collapse text-sm md:text-base'>
      <thead>
        <tr className='text-left text-xs md:text-base table-row'>
          <th className='py-2'>Favourite</th>
          <th className='p-2'>Name</th>
          <th className='p-2'>
            <span className="flex items-center gap-1">
              Subscriptions
              <ArrowDown />
            </span>
          </th>
          <th className='p-2'>Total Views</th>
          <th className='p-2'>Videos</th>
          <th className='p-2'>Like</th>
          <th className='p-2'>Dislike</th>
          <th className='p-2'>Comments</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index} className='border-t md:table-row'>
            {/* Favorite Icon */}
            <td className='p-2 py-4'></td>

            {/* Name */}
            <td className='p-2 py-4'>
              <span className='flex gap-2 items-center'>
                <Youtube size={16} />
                {row.name}
              </span>
            </td>

            <td className='p-2 py-4'>{row.subscriptions}</td>

            <td className='p-2 py-4'>{row.totalView}</td>

            <td className='p-2 py-4 text-pink-500'>
              <span className='flex items-center gap-2'>
                {row.videos}
                <TrendingUp size={16} />
              </span>
            </td>

            <td className='p-2 py-4'>{row.likes}</td>

            <td className='p-2 py-4'>{row.dislikes}</td>

            <td className='p-2 py-4'>{row.comments}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default CompetitorsTable
