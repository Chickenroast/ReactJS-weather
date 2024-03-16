"use client";

import { useState } from "react";
import { HiSearch } from "react-icons/hi";
import { Field } from "../Fields/Field";

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
        <Field
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
