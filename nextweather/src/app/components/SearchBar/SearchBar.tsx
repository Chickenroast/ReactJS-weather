"use client";

import { useState } from "react";

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
      <input
        type="text"
        className="text-black rounded-md p-1 m-2 w-60"
        onChange={handleChange}
        value={searchInput}
        placeholder="Search for a country"
      />
      <table className="text-black rounded-md p-1 bg-white m-2 w-60">
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
