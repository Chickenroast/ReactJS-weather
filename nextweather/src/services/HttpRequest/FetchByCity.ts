export async function fetchByCity(name: string | null) {
  const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/forecast?q=${name}&ctn=3&APPID=${apiKey}&lang=en_en&units=metric&cnt=40`
  );
  const cityData = await response.json();
  console.log("citydata", cityData);
  return cityData;
}
