import Image from "next/image";
import { format } from "date-fns";

export default function WeatherCard({ weatherData }) {
  const getDay = (time) => {
    const date = new Date(time * 1000);

    return format(date, "EEEE");
  };

  return (
    <div className="flex justify-center pt-3 mx-2">
      <div className="bg-blue-300 rounded-lg">
        <h1 className="text-center text-red-400 bg-zinc-800 rounded-t-md mb-2 text-xl">
          {getDay(weatherData.dt)}
        </h1>
        <div className="flex justify-center">
          <Image
            className=" rounded-full mx-3"
            alt={`${weatherData.weather[0].description}`}
            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
            width={100}
            height={100}
          ></Image>
        </div>
        <ul className="text-center px-2 mt-1 bg-red-300 ">
          <p>Min Temp: {weatherData.temp.min}°F</p>
          <p>Max Temp: {weatherData.temp.max}°F</p>
          <p>Humidity: {weatherData.humidity}%</p>
        </ul>
        <ul className="text-center px-2 mt-0 bg-white rounded-b-md">
          <p>Wind Speed: {weatherData.wind_speed}mph</p>
          <p>Chance for Rain {weatherData.wind_speed}%</p>
        </ul>
      </div>
    </div>
  );
}
