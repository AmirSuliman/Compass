import { Search } from 'lucide-react';

const SearchInput = () => {
  return (
    <label className="relative hidden sm:flex items-center rounded-full bg-white px-4 py-3 w-[250vh]">
      <input
        type="search"
        placeholder="Search..."
        className="w-full bg-transparent text-black focus:outline-none"
      />
      <Search className="text-gray-400" />
    </label>
  );
};
export default SearchInput;
