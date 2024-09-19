import { Link } from "react-router-dom";
import Leftsidebar from "./components/leftsidebarauth";
import Loginwithgoogle from "./components/loginwithgoogle";
import Loginwithapple from "./components/loginwithapple";

const Signup = () => {
 
  return (
    <div className="flex flex-row h-auto w-auto">
      <div className="w-[45%] hidden sm:flex">
         <Leftsidebar />
       </div>
       

      {/* Main Content Area */}
      <div className="sm:w-[130vh] bg-[#f8f8f8] flex flex-col items-center justify-start">
        <div className="p-4 max-w-md w-full text-center mt-2">
          <h1 className="text-[35px] sm:text-[40px] font-bold  text-gray-800">Welcome to Compass</h1>
          <p className=" text-[#8D8888]">Lorem Ipsum ha sido el texto de relleno estándar</p>

          {/* Login Form */}
          <form  className="space-y-5 mt-3">
          <div >
              <label htmlFor="name" className="block text-left  text-[16px]">Name</label>
              <input
                type="name"
                id="name"
                placeholder="Name"
                className="mt-1 p-3 border bg-white rounded-md w-full"
                required
              />
            </div>

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
            <div className="flex flex-row gap-2">
             <input
               type="checkbox"
               className="bg-white"
             />
             <label htmlFor="rememberMe" className="relative cursor-pointer text-[13px]">
               By proceeding, you agree to the Terms of Service and Privacy Policy
             </label>
           </div>
           
            <button
              type="submit"
              className="mt-8 w-full py-3 px-4 bg-blue-500 text-white rounded-full hover:bg-blue-600"
            >
              Create Account
            </button>
          </form>
          <p className="mt-4 text-sm">Don’t have an account? 
            <Link to={"/"}> Login here </Link></p>
            <img src="/Frame 1597887171.png" alt="img" className="mt-4" />
            <Loginwithgoogle/>
            <Loginwithapple/>
        </div>
      </div>
    </div>
  );
};

export default Signup;
