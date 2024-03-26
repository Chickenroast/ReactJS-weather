import { Flex } from "../Flex/Flex";
import { Grid } from "../Grid/Grid";
import { CityDataCard } from "@/models/api";
import Image from "next/image";

export interface CardProps {
  cityData: CityDataCard | null;
  list: [] | null;
}

export function Card({ cityData }: CardProps) {
  let day = new Date();
  let time = day.getHours();

  let fivedays = cityData?.list?.filter((fivedays, index) => {
    //modulus operator take 40 divided by 8 and return 5 and rest 0

    return index % 8 === 0;

    //need to change for take for each date and time = 8arrays for display
    //each hours for 5 days

    // take each day and display the first array of the day
    // make a button u can switch the hours from this day and display the
    // same card layout as the first one

    // display each time + temp from the 8 arrays per day
    // make a component u could slide for each day to the next hour with
    // the same layout as the first one
    // display 5 main cards for each day
    // inside u could be able to slide from next hour
    // return a card contains the temp from each time of the day
  });
  console.log("fivedays", fivedays);

  return fivedays?.map((fivedays, index) => {
    let ResultSrc = `https://openweathermap.org/img/wn/${fivedays.weather[0].icon}.png`;
    const DefaultSrc = `https://openweathermap.org/img/wn/10d@2x.png`;
    let ImageSrc = fivedays ? ResultSrc : DefaultSrc;

    return (
      <div
        key={index}
        className="bg-white/30 backdrop-brightness-150 backdrop-blur-sm text-primary font-bold rounded-xl p-5 mb-5"
      >
        <Grid>
          <Image src={ImageSrc} alt="weather icon" width={80} height={80} />
          <Flex flexDirection="col" alignItems="start">
            <h1>City : {cityData?.city.name}</h1>
            <h2>Time : {fivedays.dt_txt}</h2>
            <h2>Weather : {fivedays.weather[0].main}</h2>
            <h2>Temperature : {fivedays.main.temp}°C</h2>
            <button className="self-end transform transition duration-300 ease-in-out font-normal text-white text-xs bg-yellow-500 rounded-md p-2 mt-5 hover:translate-x-1 bg-yellow-600 w-20 tracking-widest">
              Next
            </button>
          </Flex>
        </Grid>
      </div>
    );
  });
}
