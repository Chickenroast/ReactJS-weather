import { Flex } from "../Flex/Flex";
import { Grid } from "../Grid/Grid";
import { CityDataCard } from "@/models/api";
import Image from "next/image";

interface CardProps {
  cityData: CityDataCard | null;
}

export default function Card({ cityData }: CardProps) {
  const ResultSrc = `http://openweathermap.org/img/wn/${cityData?.list[0].weather[0].icon}.png`;
  const DefaultSrc = `https://openweathermap.org/img/wn/10d@2x.png`;

  const ImageSrc = cityData ? ResultSrc : DefaultSrc;

  return (
    <div className="bg-white/30 backdrop-brightness-150 backdrop-blur-sm text-primary font-bold rounded-xl p-5">
      <div>
        <Grid>
          <Image src={ImageSrc} alt="weather icon" width={80} height={80} />
          <Flex flexDirection="col" alignItems="start">
            <h1>City : {cityData?.city.name}</h1>
            <h2>Country : {cityData?.city.country}</h2>
            <h2>Weather : {cityData?.list[0].weather[0].main}</h2>
            <h2>Temperature : {cityData?.list[0].main.temp}°C</h2>
          </Flex>
        </Grid>
      </div>
    </div>
  );
}
