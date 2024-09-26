import { SquareArrowOutUpRight, Files, Copy } from "lucide-react";

const Socials=()=>{

    return(
        <div className="flex flex-col space-y-8 p-4">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-12  items-center ">
            <div className="flex flex-row gap-3">
            <img src="/image 19.png" alt="img" />
            <div className="flex flex-col gap-2">
            <p className="text-sm text-gray-500">
              Lorem Ipsum ha sido el texto de relleno estándar de las...
            </p>
            <div className="flex flex-row gap-6">
              {/* Copy Icon and Label */}
              <div className="flex flex-row gap-2 items-center justify-center">
                <Files size={12} className="text-gray-400" />
                <p className="text-[12px]">Copy</p>
              </div>

              {/* SquareArrowOutUpRight Icon and Label */}
              <div className="flex flex-row gap-2 items-center justify-center">
                <SquareArrowOutUpRight size={12} className="text-gray-400" />
                <p className="text-[12px]">Share</p>{' '}
                {/* Changed the label here */}
              </div>
            </div>
          </div>
            </div>
           <div className="flex flex-row items-center justify-between gap-12">
           <div className="flex flex-row gap-4 text-[#707070] text-sm">
                <img src="/image 9.png" alt="img"/>
                <p>Facebook</p>
            </div>

            <button className="p-3 px-6 border rounded-full border-gray-400 text-[#171717] text-sm font-semibold">
            View Suggestions
            </button>
           </div>
            
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-12  items-center ">
            <div className="flex flex-row gap-3">
            <img src="/image 19.png" alt="img" />
            <div className="flex flex-col gap-2">
            <p className="text-sm text-gray-500">
              Lorem Ipsum ha sido el texto de relleno estándar de las...
            </p>
            <div className="flex flex-row gap-6">
              {/* Copy Icon and Label */}
              <div className="flex flex-row gap-2 items-center justify-center">
                <Files size={12} className="text-gray-400" />
                <p className="text-[12px]">Copy</p>
              </div>

              {/* SquareArrowOutUpRight Icon and Label */}
              <div className="flex flex-row gap-2 items-center justify-center">
                <SquareArrowOutUpRight size={12} className="text-gray-400" />
                <p className="text-[12px]">Share</p>{' '}
                {/* Changed the label here */}
              </div>
            </div>
          </div>
            </div>
           <div className="flex flex-row items-center justify-between gap-12">
           <div className="flex flex-row gap-4 text-[#707070] text-sm">
                <img src="/image 9.png" alt="img"/>
                <p>Facebook</p>
            </div>

            <button className="p-3 px-6 border rounded-full border-gray-400 text-[#171717] text-sm font-semibold">
            View Suggestions
            </button>
           </div>
            
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-12  items-center ">
            <div className="flex flex-row gap-3">
            <img src="/image 19.png" alt="img" />
            <div className="flex flex-col gap-2">
            <p className="text-sm text-gray-500">
              Lorem Ipsum ha sido el texto de relleno estándar de las...
            </p>
            <div className="flex flex-row gap-6">
              {/* Copy Icon and Label */}
              <div className="flex flex-row gap-2 items-center justify-center">
                <Files size={12} className="text-gray-400" />
                <p className="text-[12px]">Copy</p>
              </div>

              {/* SquareArrowOutUpRight Icon and Label */}
              <div className="flex flex-row gap-2 items-center justify-center">
                <SquareArrowOutUpRight size={12} className="text-gray-400" />
                <p className="text-[12px]">Share</p>{' '}
                {/* Changed the label here */}
              </div>
            </div>
          </div>
            </div>
           <div className="flex flex-row items-center justify-between gap-12">
           <div className="flex flex-row gap-4 text-[#707070] text-sm">
                <img src="/image 9.png" alt="img"/>
                <p>Facebook</p>
            </div>

            <button className="p-3 px-6 border rounded-full border-gray-400 text-[#171717] text-sm font-semibold">
            View Suggestions
            </button>
           </div>
            
        </div>


        </div>
    )
}
export default Socials;