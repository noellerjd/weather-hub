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

// http://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=1&appid=${apiKey}

const SearchResults = async ({ searchParams }) => {
  const forecastData = await getWeatherData(searchParams.location);
  if (forecastData === null) {
    return (
      <div>
        <h1>Error: Could not find data.</h1>
      </div>
    );
  }

  // console.log(forecastData.daily);

  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-center bg-zinc-800 w-fit text-2xl text-white px-3 py-2 rounded-md">
          5-Day Forecast
        </h1>
      </div>
      <div className="flex justify-evenly">
        {forecastData.daily.map((weather, i) => {
          if (i >= 5) {
            return;
          }
          return <WeatherCard weatherData={weather} key={i} />;
        })}
      </div>
    </div>
  );
};

export default SearchResults;
