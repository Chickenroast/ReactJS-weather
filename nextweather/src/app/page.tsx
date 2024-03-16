import WeatherComponent from "./components/Weather/Weather";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="bg-black">
        <h1 className="text-white text-4xl">Weather App</h1>
      </div>
      <WeatherComponent />
    </main>
  );
}
