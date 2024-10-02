import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className="flex flex-row gap-8 text-[#79747E] font-medium mt-6">
        <NavLink
          to="/user/ai/campaigns"
          className={({ isActive }) =>
            isActive ? "text-blue-500 relative" : ""
          }
        >
          {({ isActive }) => (
            <button className="relative">
              Objective Pursued
              {isActive && (
                <span className="absolute left-0 bottom-[-6px] h-[2px] w-full bg-blue-500" />
              )}
            </button>
          )}
        </NavLink>

        <NavLink
          to="/user/ai/target-audience"
          className={({ isActive }) =>
            isActive ? "text-blue-500 relative" : ""
          }
        >
          {({ isActive }) => (
            <button className="relative">
              Target Audience
              {isActive && (
                <span className="absolute left-0 bottom-[-6px] h-[2px] w-full bg-blue-500" />
              )}
            </button>
          )}
        </NavLink>

        <NavLink
          to="/user/ai/add-competitors"
          className={({ isActive }) =>
            isActive ? "text-blue-500 relative" : ""
          }
        >
          {({ isActive }) => (
            <button className="relative">
              Competitors
              {isActive && (
                <span className="absolute left-0 bottom-[-6px] h-[2px] w-full bg-blue-500" />
              )}
            </button>
          )}
        </NavLink>
      </div>
      <div className="h-[1px] w-full sm:w-1/3 bg-[#E0E0E0] mt-1.5" />
    </>
  );
};

export default Nav;
