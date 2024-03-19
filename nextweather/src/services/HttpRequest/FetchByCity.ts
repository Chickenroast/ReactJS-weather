export async function fetchByCity(name: string | null) {
  const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
  const response = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${name}&limit=5&appid=${apiKey}`
  );
  if (!response.ok) {
    throw new Error("Error: ${response.statusText}");
  }
  const data = await response.json();
  return data;
  console.log(data.name + data.country + data.lat + data.lon);
}
