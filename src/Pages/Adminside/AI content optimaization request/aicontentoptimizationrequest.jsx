import {MoveUpRight} from 'lucide-react'

const AIcontentOptimization =()=>{

    return(
        <div className="bg-white p-4 border rounded-lg w-full">
            <h1>AI content optimization requests</h1>
            <div className="flex sm:flex-row flex-col gap-2 items-center justify-between w-full">
                <div className="border p-2 w-full">
                    <div className="flex flex-row items-center justify-between text-blue-500">
                        <p>23,430</p>
                        <div className="flex flex-row gap-1 items-center">
                           <p>23%</p>
                           <MoveUpRight />
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}
export default AIcontentOptimization;