import Leftsidebar from "./components/leftsidebarauth";

const Login = () => {
  return (
    <div className="flex flex-row h-screen">
      {/* Sidebar with fixed width */}
      <div>
      <Leftsidebar />

      </div>

      {/* Main Content Area */}
      <div className=" w-[130vh] bg-[#f8f8f8] flex items-center justify-center">
        <div className=" shadow-lg rounded-lg p-8 max-w-md w-full text-center">
          <h1 className="text-2xl font-bold mb-6 text-gray-800">Welcome Back</h1>
          {/* Additional content (like forms) can be added here */}
        </div>
      </div>
    </div>
  );
};

export default Login;
