export async function fetchByCity(name: string | null) {
  const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
  const response = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${name}&limit=5&appid=${apiKey}`
  );
  const data = await response.json();
  return data;
}
