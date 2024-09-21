import {UsersRound,StickyNote,ThumbsUp,MessagesSquare,Share} from 'lucide-react'

const Cards = ()=>{

    return(
        
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between w-full mt-8">
            <div className="bg-white shadow-md p-4 flex flex-col gap-2 w-full rounded-md">
                <div className="flex flex-row items-center justify-between text-sm font-medium text-[#849AA9]  w-auto">
                    <p>Total Followers</p>
                    <UsersRound />
                </div>
                <div className="flex flex-row items-center justify-between text-[20px] font-medium  w-auto">
                    <p>13,675</p>
                    <p className='text-[#2CDDC7] text-sm'>+2,51%</p>
                </div>
            </div>

            <div className="bg-white shadow-md p-4 flex flex-col gap-2 w-full rounded-md">
                <div className="flex flex-row items-center justify-between text-sm font-medium text-[#849AA9]  w-auto">
                    <p>Total Posts</p>
                    <StickyNote />
                </div>
                <div className="flex flex-row items-center justify-between text-[20px] font-medium  w-auto">
                    <p>13,675</p>
                    <p className='text-red-500 text-sm'>+2,51%</p>
                </div>
            </div>

            <div className="bg-white shadow-md p-4 flex flex-col gap-2 w-full rounded-md">
                <div className="flex flex-row items-center justify-between text-sm font-medium text-[#849AA9]  w-auto">
                    <p>Total Likes</p>
                    <ThumbsUp />
                </div>
                <div className="flex flex-row items-center justify-between text-[20px] font-medium  w-auto">
                    <p>13,675</p>
                    <p className='text-red-500 text-sm'>+2,51%</p>
                </div>
            </div>


            <div className="bg-white shadow-md p-4 flex flex-col gap-2 w-full rounded-md">
                <div className="flex flex-row items-center justify-between text-sm font-medium text-[#849AA9]  w-auto">
                    <p>Total Comments</p>
                    <MessagesSquare />
                </div>
                <div className="flex flex-row items-center justify-between text-[20px] font-medium   w-auto">
                    <p>13,675</p>
                    <p className='text-[#2CDDC7] text-sm'>+2,51%</p>
                </div>
            </div>


            <div className="bg-white shadow-md p-4 flex flex-col gap-2 w-full  rounded-md">
                <div className="flex flex-row items-center justify-between text-sm font-medium text-[#849AA9] w-auto">
                    <p>Total Shares</p>
                    <Share />
                </div>
                <div className="flex flex-row items-center justify-between text-[20px] font-medium  w-auto">
                    <p>13,675</p>
                    <p className='text-[#2CDDC7] text-sm'>+2,51%</p>
                </div>
            </div>



        </div>   
    )
}
export default Cards;