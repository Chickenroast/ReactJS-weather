"use client";

import { useState } from "react";
import { HiSearch } from "react-icons/hi";
import { Field } from "../Fields/Field";
import { fetchByCity } from "@/services/HttpRequest/FetchByCity";
import { data } from "@/models/api";
// import useFetchForecastCity from "../../services/FecthByCity";
// import forecastCityData from "../../services/FecthByCity";

export function SearchBar() {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  async function handleSubmit() {
    try {
      const returnedData = await fetchByCity(searchInput);
      const result = returnedData.map((city: data) => {
        return {
          name: city.name,
          country: city.country,
          lat: city.lat,
          lon: city.lon,
          state: city.state,
        };
      });
      console.log(returnedData);
    } catch (error) {
      console.error(error);
    }
    handleSubmit();
  }

  return (
    <main>
      <Field
        onChange={handleChange}
        value={searchInput}
        placeholder="Search for a city"
        Icon={<HiSearch />}
      />
      <button
        type="submit"
        onClick={handleSubmit}
        style={{ padding: "10px", width: "100px" }}
      >
        Search
      </button>
      <div>
        <h1>City Name</h1>
        <h1>Country</h1>
        <h1>Latitude</h1>
        <h1>Longitude</h1>
        <h1>State</h1>
      </div>
    </main>
  );
}
