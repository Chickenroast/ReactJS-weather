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
      country.name.includes(searchInput)
    );
    setFilteredCountries(filtered);
  };

  return (
    <div>
      <input
        type="text"
        className="text-black"
        onChange={handleChange}
        value={searchInput}
      />
      <table>
        <tr>
          <th>Country</th>
        </tr>
        <div>
          {filteredCountries.map((country, index) => (
            <tr key={index}>
              <td>{country.name}</td>
            </tr>
          ))}
        </div>
      </table>
    </div>
  );
}
