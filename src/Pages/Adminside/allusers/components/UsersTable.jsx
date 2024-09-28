import Avatar from "/images/all-users-avatar.png"

const UsersTable = () => {
  const tableData = [
    {
      name: "Tanvi Ram",
      phoneNo: "Completed",
      email: "johndoe@gmail.com",
      subscriptionPlan: "Pro Plan",
      method: "Paypal",
      dateCreated: "2023-11-10",
    },
    {
      name: "Tanvi Ram",
      phoneNo: "Completed",
      email: "johndoe@gmail.com",
      subscriptionPlan: "Pro Plan",
      method: "Paypal",
      dateCreated: "2023-11-10",
    },
    {
      name: "Tanvi Ram",
      phoneNo: "Completed",
      email: "johndoe@gmail.com",
      subscriptionPlan: "Pro Plan",
      method: "Paypal",
      dateCreated: "2023-11-10",
    },
    {
      name: "Tanvi Ram",
      phoneNo: "Completed",
      email: "johndoe@gmail.com",
      subscriptionPlan: "Pro Plan",
      method: "Paypal",
      dateCreated: "2023-11-10",
    },
    {
      name: "Tanvi Ram",
      phoneNo: "Completed",
      email: "johndoe@gmail.com",
      subscriptionPlan: "Pro Plan",
      method: "Paypal",
      dateCreated: "2023-11-10",
    },
    {
      name: "Tanvi Ram",
      phoneNo: "Completed",
      email: "johndoe@gmail.com",
      subscriptionPlan: "Pro Plan",
      method: "Paypal",
      dateCreated: "2023-11-10",
    },
    {
      name: "Tanvi Ram",
      phoneNo: "Completed",
      email: "johndoe@gmail.com",
      subscriptionPlan: "Pro Plan",
      method: "Paypal",
      dateCreated: "2023-11-10",
    },
    {
      name: "Tanvi Ram",
      phoneNo: "Completed",
      email: "johndoe@gmail.com",
      subscriptionPlan: "Pro Plan",
      method: "Paypal",
      dateCreated: "2023-11-10",
    },
  ]

  return (
    <table className='w-full min-w-max text-sm md:text-base'>
      <thead>
        <tr className='text-white text-left text-xs md:text-base table-row bg-blue-500'>
          <th className='p-4 rounded-tl-lg'>User</th>
          <th className='p-4'>Phone No</th>
          <th className='p-4'>Email</th>
          <th className='p-4'>Subscription Plan</th>
          <th className='p-4'>Method</th>
          <th className='p-4 rounded-tr-lg'>Date Created</th>
        </tr>
      </thead>
      <tbody>
        {tableData?.map((item, index) => (
          <tr key={index} className='border-t md:table-row'>
            <td className='p-4 flex items-center gap-4'>
              <img src={Avatar} alt='' />
              {item.name}
            </td>
            <td className='p-4'>{item.phoneNo}</td>
            <td className='p-4'>{item.email}</td>
            <td className='p-4'>{item.subscriptionPlan}</td>
            <td className='p-4'>{item.method}</td>
            <td className='p-4'>{item.dateCreated}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default UsersTable
