import DefaultLayout from "../../../Layout/defaultlayout";
import { Copy, SquareArrowOutUpRight, Files } from "lucide-react";

const Savedcontent = () => {
  return (
    <DefaultLayout>
      <div className="flex flex-col space-y-8">
        <h1 className="text-[26px] font-semibold mb-6">Saved Content</h1>

        <div className="flex flex-row gap-4  items-center ">
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
                <p className="text-[12px]">Share</p> {/* Changed the label here */}
              </div>
            </div>
          </div>
          <Copy size={22} className="text-gray-400 sm:ml-8"/>
        </div>

        <div className="flex flex-row gap-4  items-center ">
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
                <p className="text-[12px]">Share</p> {/* Changed the label here */}
              </div>
            </div>
          </div>
          <Copy size={22} className="text-gray-400 sm:ml-8"/>
        </div>

        <div className="flex flex-row gap-4  items-center ">
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
                <p className="text-[12px]">Share</p> {/* Changed the label here */}
              </div>
            </div>
          </div>
          <Copy size={22} className="text-gray-400 sm:ml-8"/>
        </div>

        <div className="flex flex-row gap-4  items-center ">
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
                <p className="text-[12px]">Share</p> {/* Changed the label here */}
              </div>
            </div>
          </div>
          <Copy size={22} className="text-gray-400 sm:ml-8 "/>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Savedcontent;
