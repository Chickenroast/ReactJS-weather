"use client";

import { useState } from "react";
import { HiSearch } from "react-icons/hi";
import { Field } from "../Fields/Field";
import { fetchByCity } from "@/services/HttpRequest/FetchByCity";
import { CityDataSchema } from "@/models/api";

export function SearchBar() {
  const [searchInput, setSearchInput] = useState("");
  // tentar comparar oque eu recebo com oque eu tenho la no schema assim depois eu posso fazer enums
  const [cityData, setCityData] = useState<CityDataSchema | null>(null);
  const [weatherData, setweatherData] = useState<CityDataSchema | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  async function handleSubmit() {
    const cityData = await fetchByCity(searchInput);
    const weatherData = await cityData;
    setCityData(cityData);
    setweatherData(weatherData);
    console.log("weatherData", weatherData);
    console.log("cityData", cityData);
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
        <h1>City : {cityData?.city.name}</h1>
        <h1>Country : {cityData?.city.country}</h1>
        <h1>Weather : {cityData?.list[0].weather[0].main}</h1>
        <h1>Latitude : {cityData?.city.coord.lat}</h1>
        <h1>Longitude : {cityData?.city.coord.lon}</h1>
        <img
          src={`http://openweathermap.org/img/wn/${cityData?.list[0].weather[0].icon}.png`}
          alt="weather icon"
        />
      </div>
    </main>
  );
}
