import { SearchIcon } from "../../utils/assets";
import type { SearchBarProps } from "../types";

function SearchBar({ onChange, value }: SearchBarProps) {
  return (
    <div className="relative rounded-sm mb-2 ml-2 mr-4 w-full box-border  p-2">
      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
        <SearchIcon />
      </span>

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search To-Do"
        className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  );
}

export default SearchBar;
