"use client";

import { useState } from "react";
import { HiSearch } from "react-icons/hi";

interface SearchBarProps extends React.InputHTMLAttributes<HTMLInputElement> {
  Icon?: React.ReactNode;
}

const SearchBarProps: React.FC<SearchBarProps> = ({ Icon, ...props }) => {
  return (
    <div className="relative flex items-center text-black">
      {Icon && (
        <div className="absolute inset-y-0 left-0 pl-2 flex items-center">
          {Icon}
        </div>
      )}
      <input
        type="text"
        className={`w-full py-2 pl-10 pr-4 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
        {...props}
      />
    </div>
  );
};

export function SearchBar() {
  const [searchInput, setSearchInput] = useState("");
  const [filteredCountries, setFilteredCountries] = useState<
    { name: string; continent: string }[]
  >([]);

  //replace with data fetch from the API
  const countries = [
    { name: "Belgium", continent: "Europe" },
    { name: "India", continent: "Asia" },
    { name: "Bolivia", continent: "South America" },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchInput(e.target.value);
    const filtered = countries.filter((country) =>
      country.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredCountries(filtered);
  };

  return (
    <main>
      <div>
        <SearchBarProps
          onChange={handleChange}
          value={searchInput}
          placeholder="Search for a country"
          Icon={<HiSearch />}
        />
      </div>
      <table className="text-black rounded-md py-2 pl-10 pr-4 bg-white m-2 w-full">
        <tr>
          <th className="p-1">
            <p className="text-left">Result</p>
          </th>
        </tr>
        {filteredCountries.map((country, index) => (
          <tr key={index}>
            <td>{country.name}</td>
          </tr>
        ))}
      </table>
    </main>
  );
}
