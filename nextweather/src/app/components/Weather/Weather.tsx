"use client";
import useFetchForecast from "../../services/Cities"; // Adjust the import path as necessary

const WeatherComponent = () => {
  const { forecastData, isLoading, error } = useFetchForecast(44.34, 10.99);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Weather Forecast</h1>
    </div>
  );
};

export default WeatherComponent;
