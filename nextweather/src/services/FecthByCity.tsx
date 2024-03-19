// import { useState, useEffect } from "react";
// import { WeatherForecast } from "../models/api";

// const useFetchForecastCity = (name: string | null) => {
//   const [forecastCityData, setforecastCityData] =
//     useState<WeatherForecast | null>(null);

//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     if (!name) return;

//     const fecthForecastCity = async () => {
//       setIsLoading(true);

//       const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
//       const url = `http://api.openweathermap.org/geo/1.0/direct?q=${name}&limit=5&appid=${apiKey}`;
//       console.log(url);
//       try {
//         const response = await fetch(url);
//         if (!response.ok) {
//           const errorMain = await response.json();
//           throw new Error(`${response.statusText} - ${errorMain.message}`);
//         }
//         const data = await response.json();
//         setforecastCityData(data);
//       } catch (error) {
//         console.log(error);
//         if (error instanceof Error) {
//           setError(error.message);
//         }
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fecthForecastCity();
//   }, [name]);

//   return { forecastCityData, isLoading, error };
// };

// export default useFetchForecastCity;
