const Dropdown = ({ label, values }) => {
    return (
      <div className="relative inline-block w-30">
        <select className="w-full appearance-none bg-white text-black text-base font-normal py-2 px-4 pr-8 rounded-lg shadow-md focus:outline-none">
          <option hidden>{label || "Select an option"}</option>
          {values?.map((item, index) => (
            <option key={index}>{item}</option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 top-1 flex items-center px-2 text-gray-400">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
          </svg>
        </div>
      </div>
    );
  };
  
  export default Dropdown;