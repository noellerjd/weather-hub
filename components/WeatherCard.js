import Image from "next/image";
import { format } from "date-fns";

export default function WeatherCard({ weatherData }) {
  //   console.log(weatherData);
  const getDay = (time) => {
    console.log(time);
    const date = new Date(time * 1000);

    return format(date, "EEEE");
  };

  return (
    <div className="flex justify-center align-middle">
      <Image
        alt="Weather Icon"
        src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
        width={100}
        height={100}
      ></Image>
      <h1>{getDay(weatherData.dt)}</h1>
    </div>
  );
}
