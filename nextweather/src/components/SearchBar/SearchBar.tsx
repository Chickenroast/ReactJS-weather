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
  const [cityList, setCityList] = useState<data[] | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  async function handleSubmit() {
    const cityData = await fetchByCity(searchInput);
    // const cityList = cityData.map((city: data) => ({
    //   name: city.name,
    //   country: city.country,
    //   state: city.state,
    //   lat: city.lat,
    //   lon: city.lon,
    // }));
    setCityList(cityData);
    console.log(cityList);
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
      {cityList?.map((city, index) => (
        <div key={index}>
          <h1>City : {city.name}</h1>
          <h1>Country : {city.country}</h1>
          <h1>State : {city.state}</h1>
          <h1>Latitude : {city.lat}</h1>
          <h1>Longitude : {city.lon}</h1>
        </div>
      ))}
    </main>
  );
}
