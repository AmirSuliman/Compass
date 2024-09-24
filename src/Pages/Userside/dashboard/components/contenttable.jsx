import { Copy, Files, SquareArrowOutUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Contenttable = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full border border-gray-300 rounded-md">
      <div className="w-full flex flex-row items-center justify-between  p-4 px-6">
        <h2 className="text-[#555555] font-medium text-[18px]">Content</h2>
        <button
          onClick={() => {
            navigate('/user/overview/saved-content');
          }}
          className="text-[#686D7D] text-sm font-medium"
        >
          Save
        </button>
      </div>
      <div className="flex flex-col bg-white rounded-md py-4 items-center justify-center ">
        <div className="flex flex-row gap-2 px-2 sm:px-0 sm:gap-5  items-center ">
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
          <Copy size={22} className="text-gray-400 sm:ml-8" />
        </div>
        <div className="w-full h-[1px] bg-gray-300 mb-4" />

        <div className="flex flex-row gap-2 px-2 sm:px-0 sm:gap-5  items-center mb-2">
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
          <Copy size={22} className="text-gray-400 sm:ml-8" />
        </div>
        <div className="w-full h-[0.3px] bg-gray-300 mb-4" />

        <div className="flex flex-row gap-2 px-2 sm:px-0 sm:gap-5  items-center mb-2">
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
          <Copy size={22} className="text-gray-400 sm:ml-8" />
        </div>
        <div className="w-full h-[0.3px] bg-gray-300 mb-4" />

        <div className="flex flex-row gap-2 px-2 sm:px-0 sm:gap-5  items-center mb-2">
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
          <Copy size={22} className="text-gray-400 sm:ml-8" />
        </div>
        <div className="w-full h-[1px] bg-gray-300 " />
      </div>
    </div>
  );
};
export default Contenttable;
