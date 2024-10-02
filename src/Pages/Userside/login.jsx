import { Link } from "react-router-dom";
import Leftsidebar from "./components/leftsidebarauth";
import Loginwithgoogle from "./components/loginwithgoogle";
import Loginwithapple from "./components/loginwithapple";

const Login = () => {
 
  return (
    <div className="flex flex-row min-h-screen w-auto">
      {/* Sidebar with fixed width */}
      <div className="w-[42%] hidden sm:flex ">
        <Leftsidebar />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 bg-[#f8f8f8] flex flex-col items-center justify-start">
        <div className="p-4 max-w-md w-full text-center mt-8">
          <h1 className="text-[40px] font-bold  text-gray-800">Welcome Back</h1>
          <p className="mb-6 text-[#8D8888]">Lorem Ipsum ha sido el texto de relleno estándar</p>

          {/* Login Form */}
          <form  className="space-y-6 mt-14">
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

            <div className="flex items-center justify-between -mt-4">
              <div className="flex items-center justify-center flex-row gap-2">
                <input
                  type="checkbox"
                  id="rememberMe"
                 
                />
                <label htmlFor="rememberMe" className="relative cursor-pointer text-[16px]">
                  Remember me
                </label>
              </div>
            
                  <a href="/forgot-password" className="text-blue-600 ">Forgot Password?</a>
            </div>
            

            <button
              type="submit"
              className="mt-8 w-full py-3 px-4 bg-blue-500 text-white rounded-full hover:bg-blue-600"
            >
              Log In
            </button>
          </form>
          <p className="mt-4 text-sm">Don’t have an account? 
            <Link to={"/signup"}> Signup here</Link></p>
            <img src="/Frame 1597887171.png" alt="img" className="mt-4" />
            <Loginwithgoogle/>
            <Loginwithapple/>
        </div>
      </div>
    </div>
  );
};

export default Login;
