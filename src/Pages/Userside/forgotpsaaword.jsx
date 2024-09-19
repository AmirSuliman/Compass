import { Link } from "react-router-dom";
import Leftsidebar from "./components/leftsidebarauth";

const Forgotpassword = () => {
 
  return (
    <div className="flex flex-row h-[100vh]">
      {/* Sidebar with fixed width */}
      <div className="w-[45%] hidden sm:flex">
        <Leftsidebar />
      </div>

      {/* Main Content Area */}
      <div className="sm:w-[130vh] bg-[#f8f8f8] flex flex-col items-center justify-center">
        <div className="p-4 max-w-md w-full text-center mt-8">
          <h1 className="text-[40px] font-bold text-gray-800">Forgot Password</h1>
          <p className="mb-6 text-[#8D8888]">Lorem Ipsum ha sido el texto de relleno estándar</p>

          {/* Login Form */}
          <form  className="space-y-6 mt-6">
            <div >
              <label htmlFor="email" className="block text-left  text-[16px]">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="mt-1 p-3 border bg-white rounded-md w-full"
                required
              />
            </div>

            <button
              type="submit"
              className="mt-8 w-full py-3 px-4 bg-blue-500 text-white rounded-full hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
          <p className="mt-4 text-sm">I remembered, I wanna 
            <Link to={"/"}> Login</Link></p>
           
        </div>
      </div>
    </div>
  );
};

export default Forgotpassword;
