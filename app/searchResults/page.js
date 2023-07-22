import WeatherCard from "@/components/WeatherCard";

const getWeatherData = async (location) => {
  const geoResponse = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${process.env.API_KEY}`
  );

  const geoData = await geoResponse.json();
  if (geoData.length === 0) {
    return null;
  }

  const lat = geoData[0].lat;
  const lon = geoData[0].lon;

  const exclude = "minutely,hourly,alerts";

  const forecastResponse = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${exclude}&appid=${process.env.API_KEY}&units=imperial`
  );
  const forecastData = await forecastResponse.json();

  return forecastData;
};

const SearchResults = async ({ searchParams }) => {
  const forecastData = await getWeatherData(searchParams.location);
  if (forecastData === null) {
    return (
      <div>
        <h1>
          Error: Could not find data for{" "}
          <span className="text-red-400">{searchParams.location}</span>. Please
          try restructuring your search.
        </h1>
      </div>
    );
  }
  // console.log(forecastData);

  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-center bg-zinc-800 w-fit text-2xl text-white px-3 py-2 rounded-md">
          Forecast for{" "}
          <span className="text-red-400">{searchParams.location}</span>
        </h1>
      </div>
      <div className="flex flex-wrap justify-evenly mt-3 px-2 pb-3 bg-zinc-700 rounded-md">
        {forecastData.daily.map((weather, i) => {
          return <WeatherCard weatherData={weather} key={i} />;
        })}
      </div>
    </div>
  );
};

export default SearchResults;
