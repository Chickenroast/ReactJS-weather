import { useState, useEffect } from "react";

const useFetchForecast = (lat: number | null, lon: number | null) => {
  const [forecastData, setforecastData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (lat === null || lon === null) return;

    const fecthForecast = async () => {
      setIsLoading(true);

      const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
      const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Error: ${response.statusText}");
        }
        const data = await response.json();
        setforecastData(data);
      } catch (error) {
        setError(
          error instanceof Error ? error : new Error("Something went wrong")
        );
      } finally {
        setIsLoading(false);
      }
    };

    fecthForecast();
  }, [lat, lon]);
  console.log(forecastData, "forecastData");
  return { forecastData, isLoading, error };
};

export default useFetchForecast;
