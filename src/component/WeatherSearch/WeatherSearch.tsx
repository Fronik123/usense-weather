import { useDebounce } from "../../hooks/useDebounce";
import { useWeather } from "../../hooks/useWeather";
import { useWeatherStore } from "../../store/useWeatherStore";
import { Error } from "../ui/Error/Error";

import { CustomInput } from "../ui/Input/CustomInput";
import { Loader } from "../ui/Loading/Loader";
import WeatherCard from "../WeatherCard/WeatherCard";
import { useEffect } from "react";

function WeatherSearch() {
  const { city, setCity } = useWeatherStore();
  const { data, isLoading, error, refetch } = useWeather(city);
  const debouncedCity = useDebounce(city, 500);

  useEffect(() => {
    if (debouncedCity.trim()) {
      refetch();
    }
  }, [debouncedCity]);

  return (
    <div className="main-container">
      <h1>Weather</h1>

      <CustomInput
        placeholder="Введіть місто..."
        handleChange={(value) => {
          setCity(value);
        }}
        type="text"
        value={city}
      />

      {isLoading && <Loader />}
      {error && <Error message={error.message} />}
      {data && <WeatherCard weather={data} />}
    </div>
  );
}

export default WeatherSearch;
