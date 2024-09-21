import { Filter } from 'lucide-react';
import Tabs from './Tabs';

const Header = () => {
  return (
    <header className="flex flex-wrap items-center gap-4">
      <Tabs />
      <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border-[0.5px] border-light-gray font-medium text-xs ml-auto mr-0">
        <Filter size={18} />
        Filter
      </button>
      <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border-none font-medium text-xs">
        Youtube
      </button>
      <button className="p-1 rounded-full size-8 flex items-center justify-center text-lg font-semibold">
        +
      </button>
    </header>
  );
};
export default Header;
