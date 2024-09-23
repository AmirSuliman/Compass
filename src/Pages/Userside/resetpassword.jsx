import { Link } from "react-router-dom";
import Leftsidebar from "./components/leftsidebarauth";

const Resetpassword = () => {
 
  return (
    <div className="flex flex-row min-h-screen">
      {/* Sidebar with fixed width */}
      <div className="w-[45%] hidden sm:flex">
        <Leftsidebar />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 bg-[#f8f8f8] flex flex-col items-center justify-center">
        <div className="p-4 max-w-md w-full text-center mt-8">
          <h1 className="text-[40px] font-bold text-gray-800">Reset Password</h1>
          <p className="mb-6 text-[#8D8888]">Lorem Ipsum ha sido el texto de relleno estándar</p>

          {/* Login Form */}
          <form  className="space-y-6 mt-6">
          <div>
              <label htmlFor="password" className="block text-left text-[16px]">Password</label>
              <input
                type="password"
                id="password"
                placeholder="***********"
                className="mt-1 p-3 border bg-white rounded w-full"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-left text-[16px]">Confirm Password</label>
              <input
                type="password"
                id="password"
                placeholder="***********"
                className="mt-1 p-3 border bg-white rounded w-full"
                required
              />
            </div>

            <button
              type="submit"
              className="mt-8 w-full py-3 px-4 bg-blue-500 text-white rounded-full hover:bg-blue-600"
            >
              Update
            </button>
          </form>
          
           
        </div>
      </div>
    </div>
  );
};

export default Resetpassword;
