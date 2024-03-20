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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  async function handleSubmit() {
    const cityData = await fetchByCity(searchInput);
    const citylist = cityData.map((list: CityDataSchema) => {
      console.log(list);
    });
    // const cityTemp = cityData.map(
    // como catar o weather main que esta no list array e no weather array ?
    // estou fazendo um fetch na city posso pegar oque tem antes do city e display ele ?
    //   (coord: CityDataSchema, list: CityDataSchema) => ({
    //     lat: coord,
    //     weather: list[0].weather[0].main,
    //   })
    // );
    // console.log(cityTemp);
    setCityData(cityData);
    console.log(cityData);
    console.log(citylist);
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
        {/* <h1>City : {cityData?.city.name}</h1>
        <h1>Country : {cityData?.city.country}</h1> */}
        {/* how to acces a that part of the data ? */}
        {/* <h1>State : {cityData?.list[0].weather[0].main}</h1>
        <h1>Latitude : {cityData?.city.coord.lat}</h1>
        <h1>Longitude : {cityData?.city.coord.lon}</h1> */}
      </div>
    </main>
  );
}
