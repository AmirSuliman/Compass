import { Filter } from 'lucide-react';
import SearchInput from '../../../../Layout/Userside/components/SearchInput';
import { useState } from 'react';
import ConnectionsList from './ConnectionsList';

const Header = () => {
  const [showList, setShowList] = useState(false);
  const toggleList = () => {
    setShowList(!showList);
  };
  return (
    <header className="relative flex flex-wrap md:flex-nowrap items-center gap-4">
      <SearchInput />
      <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border-[0.5px] border-light-gray font-medium text-xs ml-auto mr-0">
        <Filter size={18} />
        Filter
      </button>
      <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border-none font-medium text-xs">
        Youtube
      </button>
      <button
        onClick={toggleList}
        className="p-1 rounded-full size-8 flex items-center justify-center text-lg font-semibold bg-white shadow-xl text-black"
      >
        +
      </button>
      {showList && <ConnectionsList />}
    </header>
  );
};
export default Header;
