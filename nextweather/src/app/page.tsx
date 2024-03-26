"use client";
import { useState } from "react";
import { Card } from "@/components/Card/Card";

import { fetchByCity } from "@/services/HttpRequest/FetchByCity";
import { CityDataSchema } from "@/models/api";
import { Navbar } from "@/components/Navbar/Navbar";
import BackgroundVideo from "@/components/BackGroundVideo/BackgroundVideo";
import { Flex } from "@/components/Flex/Flex";

export default function Home() {
  const [cityData, setCityData] = useState<CityDataSchema | null>(null);

  const handleSearch = async (searchInput: string) => {
    const cityData = await fetchByCity(searchInput);
    setCityData(cityData);
  };

  return (
    <Flex
      flexDirection="col"
      alignItems="center"
      justifyContent="between"
      className="p-1 m-5"
    >
      <div>
        <BackgroundVideo />
        <Navbar onSearch={handleSearch} />
        <h1 className="text-white text-4xl m-5 ml-[2px]">What Wheather ?</h1>
        <Card cityData={cityData} />
      </div>
    </Flex>
  );
}
