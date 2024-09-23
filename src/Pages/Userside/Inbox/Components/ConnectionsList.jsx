import { connectionsList } from '../../../../services/data';

const ConnectionsList = () => {
  return (
    <nav className="absolute right-0 top-[105%] bg-white rounded-2xl p-4 w-fit z-50 shadow-md">
      {connectionsList.map((item, index) => (
        <button
          key={index}
          style={{
            borderColor: item.theme,
            color: item.theme,
          }}
          className={`flex items-center gap-2 border-[1px] font-semibold text-base rounded-full p-3 w-full mt-2`}
        >
          <img src={item.logo} alt="logo" className="size-4" />
          <span className="mr-auto">{item.name}</span>
          <span className="mr-0 ml-8 bg-black text-white rounded-full size-4 flex items-center justify-center">
            +
          </span>
        </button>
      ))}
    </nav>
  );
};
export default ConnectionsList;
