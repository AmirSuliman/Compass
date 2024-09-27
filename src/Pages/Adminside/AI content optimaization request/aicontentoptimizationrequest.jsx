import {MoveUpRight} from 'lucide-react'
import Linechart from './aicontentoptimizationchart';
import AicontentLinechart from './aicontentoptimizationchart';

const AIcontentOptimization =()=>{

    return(
        <div className="bg-white p-4 border rounded-lg w-full">
            <h1 className='text-[20px] font-semibold '>AI content optimization requests</h1>
            <div className="flex sm:flex-row flex-col gap-4 items-center justify-between w-full mt-6">
                <div className="bg-blue-50 p-2 w-full rounded-lg">
                    <div className="flex flex-row items-center justify-between text-blue-500">
                        <p>23,430</p>
                        <div className="flex flex-row gap-1 items-center">
                           <p>23%</p>
                           <MoveUpRight />
                        </div>
                    </div>
                   <p className='text-[12px] mt-4 text-[#131417]'>Content optimization requests</p>
                </div>

                <div className="border p-2 w-full rounded-lg">
                    <div className="flex flex-row items-center justify-between text-blue-500">
                        <p>23,430</p>
                        <div className="flex flex-row gap-1 items-center">
                           <p>23%</p>
                           <MoveUpRight />
                        </div>
                    </div>
                   <p className='text-[12px] mt-4 text-[#131417]'>Channel optimization requests</p>
                </div>

                <div className="border p-2 w-full rounded-lg">
                    <div className="flex flex-row items-center justify-between text-blue-500">
                        <p>23,430</p>
                        <div className="flex flex-row gap-1 items-center">
                           <p>23%</p>
                           <MoveUpRight />
                        </div>
                    </div>
                   <p className='text-[12px] mt-4 text-[#131417]'>KPI optimization requests</p>
                </div>

                <div className="border p-2 w-full rounded-lg">
                    <div className="flex flex-row items-center justify-between text-blue-500">
                        <p>23,430</p>
                        <div className="flex flex-row gap-1 items-center">
                           <p>23%</p>
                           <MoveUpRight />
                        </div>
                    </div>
                   <p className='text-[12px] mt-4 text-[#131417]'>KPI optimization requests</p>
                </div>

                <div className="border p-2 w-full rounded-lg">
                    <div className="flex flex-row items-center justify-between text-blue-500">
                        <p>23,430</p>
                        <div className="flex flex-row gap-1 items-center">
                           <p>23%</p>
                           <MoveUpRight />
                        </div>
                    </div>
                   <p className='text-[12px] mt-4 text-[#131417]'>Audience optimization requests</p>
                </div>
            </div>


          <AicontentLinechart/>
        </div>
    )
}
export default AIcontentOptimization;