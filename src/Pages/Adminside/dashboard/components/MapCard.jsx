import Map from '/images/admin-dashboard-map.png'

const MapCard = () => {
  return (
    <div className='bg-white p-6 shadow-md rounded-lg'>
      <div className='text-lg font-bold'>Map Distribution</div>
      <img src={Map} alt="" className='mt-8' />
    </div>
  )
}

export default MapCard
