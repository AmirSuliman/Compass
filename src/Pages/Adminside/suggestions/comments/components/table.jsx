const Table = () => {


  const tableData = [
    {
      username: "John Doe",
      email: "johndoe@gmail.com",
      icon: '/images/LinkedIn.png',
      plateform: "Linked In",
      date: "2023-11-10",
      comments: "Lorem Ipsum ha sido el texto de relleno estándar de las...",
    },
    {
      username: "John Doe",
      email: "johndoe@gmail.com",
      icon: '/images/Instagram.png',
      plateform: "Instagram",
      date: "2023-11-10",
      comments: "Lorem Ipsum ha sido el texto de relleno estándar de las...",

    },
    {
      username: "John Doe",
      email: "johndoe@gmail.com",
      icon: '/images/Tiktok.png',
      plateform: "TikTok",
      date: "2023-11-10",
      comments: "Lorem Ipsum ha sido el texto de relleno estándar de las...",
    },
    {
      username: "John Doe",
      email: "johndoe@gmail.com",
      icon: '/images/Subtrack.png',
      plateform: "Subtack",
      date: "2023-11-10",
      comments: "Lorem Ipsum ha sido el texto de relleno estándar de las...",
    },
    {
      username: "John Doe",
      email: "johndoe@gmail.com",
      icon: '/images/Facebook.png',
      plateform: "Facebook",
      date: "2023-11-10",
      comments: "Lorem Ipsum ha sido el texto de relleno estándar de las...",
    },
    {
      username: "John Doe",
      email: "johndoe@gmail.com",
      icon: '/images/LinkedIn.png',
      plateform: "Linked In",
      date: "2023-11-10",
      comments: "Lorem Ipsum ha sido el texto de relleno estándar de las...",
    },
    {
      username: "John Doe",
      email: "johndoe@gmail.com",
      icon: '/images/Instagram.png',
      plateform: "Instagram",
      date: "2023-11-10",
      comments: "Lorem Ipsum ha sido el texto de relleno estándar de las...",

    },
    {
      username: "John Doe",
      email: "johndoe@gmail.com",
      icon: '/images/Tiktok.png',
      plateform: "TikTok",
      date: "2023-11-10",
      comments: "Lorem Ipsum ha sido el texto de relleno estándar de las...",
    },
    {
      username: "John Doe",
      email: "johndoe@gmail.com",
      icon: '/images/Subtrack.png',
      plateform: "Subtack",
      date: "2023-11-10",
      comments: "Lorem Ipsum ha sido el texto de relleno estándar de las...",
    },
    {
      username: "John Doe",
      email: "johndoe@gmail.com",
      icon: '/images/Facebook.png',
      plateform: "Facebook",
      date: "2023-11-10",
      comments: "Lorem Ipsum ha sido el texto de relleno estándar de las...",
    },
    
  ]

  return (
    <table className='w-full min-w-max text-sm md:text-base'>
      <thead>
        <tr className='text-white text-left text-xs md:text-base table-row bg-blue-500'>
          <th className='p-4 rounded-tl-lg'>User</th>
          <th className='p-4'>Email</th>
          <th className='p-4'>Plateform</th>
          <th className='p-4'>Date</th>
          <th className='p-4 rounded-tr-lg'>Comments</th>
        </tr>
      </thead>
      <tbody>
        {tableData?.map((item, index) => (
          <tr key={index} className='border-t md:table-row'>
            <td className='p-4 flex items-center gap-4'>
              <img src='/images/comments-avatar.png' alt='' />
              {item.username}
            </td>
            <td className='p-4'>{item.email}</td>
            <td className='p-4'>
              <span className="flex gap-2">
              <img src={item.icon} alt="" />
              {item.plateform}
              </span>
            </td>
            <td className='p-4'>{item.date}</td>
            <td className='p-4'>{item.comments}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )

}

export default Table