const Leftsidebar = () => {
  return (
    <div className="bg-[#000F24] min-h-screen w-full  px-8">
      {/* Background image applied here */}
      <div className="bg-[url('/bg.png')] bg-no-repeat bg-cover ml-8 h-full w-full py-2 flex flex-col items-center justify-center">
        <img src="/Macbook.png" alt="img" className="mr-8 mt-24" />

        <h1 className="text-[24px] text-center mr-8 text-white">
          Lorem Ipsum ha sido el texto de <br /> Lorem Ipsum ha
        </h1>
        <div className="flex flex-row gap-4 items-center mt-8 text-white">
          <img src="/marian-kadlec 1.png" alt="img" />
          <div className="flex flex-col">
            <h1 className="text-[18px]">Marian Kadlec</h1>
            <p className="text-sm">
              Lorem Ipsum ha sido el texto de relleno estándar
              <br /> de las
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leftsidebar;
