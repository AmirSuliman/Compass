import profile from '../../../../assets/react.svg';

const Chats = () => {
  return (
    <aside className="rounded-2xl bg-white">
      <nav className="px-4 py-2 mb-2 flex">
        <button className="text-light-blue text-base font-medium px-4 py-3 bg-transparent border-b-2 border-light-blue hover:text-light-blue hover:border-light-blue w-full">
          Unresolved
        </button>
        <button className="text-medium-gray text-base font-medium px-4 py-3 bg-transparent border-b-2 border-medium-gray hover:text-light-blue hover:border-light-blue w-full">
          Unread
        </button>
        <button className="text-medium-gray text-base font-medium px-4 py-3 bg-transparent border-b-2 border-medium-gray hover:text-light-blue hover:border-light-blue w-full">
          All
        </button>
      </nav>
      <div className="overflow-y-auto max-h-screen">
        <div className="border-b-[1px] border-light-gray px-8 w-full py-4 flex gap-4">
          <img
            src={profile}
            alt="user avatar"
            className="size-16 rounded-full"
          />
          <div>
            <h4 className="font-medium text-base">Emily</h4>
            <p className="text-medium-gray text-xs">
              Lorem Ipsum ha sido el texto de relleno estándar de las...
            </p>
          </div>
          <div>
            <p className="text-sm">5s</p>
            <p className="rounded-full aspect-square w-fit h-fit flex items-center justify-center p-2 bg-tomato text-white">
              1
            </p>
          </div>
        </div>
        <div className="border-b-[1px] border-light-gray px-8 w-full py-4 flex gap-4">
          <img
            src={profile}
            alt="user avatar"
            className="size-16 rounded-full"
          />
          <div>
            <h4 className="font-medium text-base">Emily</h4>
            <p className="text-medium-gray text-xs">
              Lorem Ipsum ha sido el texto de relleno estándar de las...
            </p>
          </div>
          <div>
            <p className="text-sm">5s</p>
            <p className="rounded-full aspect-square w-fit h-fit flex items-center justify-center p-2 bg-tomato text-white">
              1
            </p>
          </div>
        </div>
        <div className="border-b-[1px] border-light-gray px-8 w-full py-4 flex gap-4">
          <img
            src={profile}
            alt="user avatar"
            className="size-16 rounded-full"
          />
          <div>
            <h4 className="font-medium text-base">Emily</h4>
            <p className="text-medium-gray text-xs">
              Lorem Ipsum ha sido el texto de relleno estándar de las...
            </p>
          </div>
          <div>
            <p className="text-sm">5s</p>
            <p className="rounded-full aspect-square w-fit h-fit flex items-center justify-center p-2 bg-tomato text-white">
              1
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};
export default Chats;
