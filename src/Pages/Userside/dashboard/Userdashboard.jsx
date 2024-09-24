import {CalendarDays, Filter, Search} from 'lucide-react'
import Statisticscard from "./components/dashboardstatistics";
import Discovercontent from './components/discovercontent';
import {Ellipsis,MoveDown } from 'lucide-react'
import InsightsChart from './components/insightschart';
const Userdashboard=()=>{

    return(
    <>
          <div className="flex flex-col sm:flex-row gap-8 items-start justify-between w-full">
                <div className="flex flex-col w-full sm:w-[70%]">
                    <div className="flex flex-row items-center justify-between w-full">
                        <h1 className="text-[14px] sm:text-[27px] text-[#1D1D2E] font-semibold">Marketing Campaign</h1>
                        <div className="flex flex-col sm:flex-row gap-2">
                            <button className="bg-white rounded-lg p-3 flex flex-row gap-2 border">
                            <CalendarDays />
                            <p className="font-medium text-[#272727]">1 Jan _ 31 Jan 2024</p>
                            </button>
                            <button className="bg-white rounded-lg p-3 flex flex-row gap-2 border">
                            <Filter />
                            <p className="font-medium text-[#272727]">filter</p>
                            </button>
                        </div>
                    </div>
                   <Statisticscard/>


                   <div className='bg-white w-full p-4 mt-6 rounded-lg'>
                      <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                        <h1 className='text-[20px] font-medium'>Insights</h1>
                        <div className='flex flex-col sm:flex-row gap-4'>
                        <div className='bg-[#E4E4E4] p-2 flex flex-row gap-2 rounded-md border font-medium'>
                            <button className='bg-black px-4 text-white p-2 rounded-md'>
                                All Mails
                            </button>
                            <button className='bg-white px-4 p-2 rounded-md '>
                            Social Media
                            </button>
                            <button className='bg-white px-4 p-2 rounded-md'>
                            Websites
                            </button>
                        </div>
                        <button className='flex flex-row px-6 items-center gap-3 border rounded-lg'>
                        <Filter />
                        <p>Filter</p>
                        </button>
                        </div>
                      </div>
                      <div className='flex h-[0.5px] w-full bg-gray-300 mt-4 '/>
                      <div className='flex flex-row items-center justify-between p-4 px-6 w-full mb-4'>
                        <div className='flex flex-row gap-6 text-gray-400 text-[12px] font-medium'>
                            <div className='flex flex-row gap-2 items-center justify-center'>
                              <div className='bg-[#3180F5] h-2 w-2 rounded-full'/>
                              <p>OpenRate</p>
                            </div>
                            <div className='flex flex-row gap-2 items-center justify-center'>
                              <div className='bg-[#FDC546] h-2 w-2 rounded-full'/>
                              <p>CRT</p>
                            </div>
                            <div className='flex flex-row gap-2 items-center justify-center'>
                              <div className='bg-[#00AF50] h-2 w-2 rounded-full'/>
                              <p>Subscribers</p>
                            </div>
                        </div>
                        <div className='flex flex-row bg-[#F5F6FA] p-3 rounded-lg border'>
                            <input type='serach' placeholder='Search' className='bg-[#F5F6FA]'/>
                            <Search className='text-[#8EA1B3]'/>

                        </div>

                      </div>

                    <InsightsChart/>

                  </div>
                </div>

              

             {/*right section*/}
              <div className='flex-1 '>
                <Discovercontent/>
                
                <div className='bg-white p-4 mt-4 rounded-md flex flex-col px-6'>
                    <div className='flex flex-row gap-4'>
                        <div className='bg-[#D4E6FF] rounded-full p-2'>
                            <img src='/Vector1.png' alt='img'/>
                        </div> 
                        <p className='text-[#4F4F4F]'>Acounts  Reached</p>
                    </div>
                    <div className='flex flex-row items-center justify-between w-full mt-6'>
                        <div className='flex flex-col '>
                            <p className='text-[#4F4F4F] font-bold text-2xl'>40k</p>
                            <p className='text-sm  text-[#4F4F4F]'>+8.4K this week</p>
                        </div>
                        <p>+1.29%</p>
                    </div>
                </div>

                <div className='flex flex-col bg-white items-center justify-center  rounded-md p-4 mt-4 w-full'>
                   <div className='flex flex-row items-center justify-between w-full'>
                   <h1 className='font-medium text-[20px]'>Your funnel</h1>
                   <Ellipsis size={32}/>
                   </div>
                   <div 
                    className='bgimg mt-10 flex-col items-center justify-center w-full' 
                            style={{ 
                              backgroundImage: `url('/Group 1982249110.png')`, 
                              backgroundSize: 'cover', 
                              backgroundPosition: 'center', 
                              height: '10vh', 
                              display: 'flex',     
                              justifyContent: 'center', 
                              alignItems: 'center',     
                              color: 'white',       
                              textAlign: 'center'     
                            }}
                            >                          
                            <p>13,932</p>
                            <p>Reach</p>
                        </div>
                            <div className='flex flex-row w-full items-center justify-center gap-2 font-bold p-1'>
                            <MoveDown />
                            <p>15,39%</p>

                            </div>
                        <div className='px-4 w-full'>
                        <div 
                            className=' mt-2 flex-col items-center justify-center w-full' 
                            style={{ 
                              backgroundImage: `url('/bgyellow.png')`, 
                              backgroundSize: 'cover', 
                              backgroundPosition: 'center', 
                              height: '10vh', 
                              display: 'flex',     
                              justifyContent: 'center', 
                              alignItems: 'center',     
                              color: 'white',       
                              textAlign: 'center'     
                            }}
                            >                          
                            <p>13,932</p>
                            <p>Visits</p>
                        </div>
                        </div>
                        

                        <div className='flex flex-row w-full items-center justify-center gap-2 font-bold p-1'>
                            <MoveDown />
                            <p>15,39%</p>

                            </div>

                         <div className='w-full px-8'>
                         <div 
                            className='bgimg mt-2 flex-col items-center justify-center w-full' 
                            style={{ 
                              backgroundImage: `url('/bgblue.png')`, 
                              backgroundSize: 'cover', 
                              backgroundPosition: 'center', 
                              height: '10vh', 
                              display: 'flex',     
                              justifyContent: 'center', 
                              alignItems: 'center',     
                              color: 'white',       
                              textAlign: 'center'     
                            }}
                            >                          
                            <p>13,932</p>
                            <p>Leads</p>
                        </div>
                         </div>
                        
                        <div className='flex flex-row items-center justify-between w-full p-4  mt-8'>
                            <div className='flex flex-row gap-1 text-[12px]'>
                                <div className='rounded-full p-2 bg-[#00AF50]'/>
                                <p>Social media</p>
                            </div>
                            <div className='flex flex-row gap-1 text-[10px]'>
                                <div className='rounded-full p-2 bg-[#FE971B]'/>
                                <p>Website</p>
                            </div>
                            <div className='flex flex-row gap-1 text-[12px]'>
                                <div className='rounded-full p-2 bg-[#3180F5]'/>
                                <p>Email</p>
                            </div>


                        </div>
                </div>

              </div>
            </div>
        </>
    )
}
export default Userdashboard;