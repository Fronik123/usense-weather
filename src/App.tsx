import { useState } from "react";

import "./App.css";
import { useWeather } from "./hooks/useWeather";
import WeatherCard from "./component/WeatherCard/WeatherCard";
import { CustomButton } from "./component/ui/Button/CustomButton";
import { CustomInput } from "./component/ui/Input/CustomInput";

function App() {
  const [city, setCity] = useState("");
  const { weather, error, fetchWeather } = useWeather();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchWeather(city);
  };

  return (
    <div className="main-container">
      <h1>Weather</h1>

      <form onSubmit={handleSubmit} className="search">
        <CustomInput
          placeholder="Введіть місто..."
          handleChange={(value) => {
            setCity(value);
          }}
          type="text"
          value={city}
        />

        <CustomButton buttonText="Показати" />
      </form>

      {error && <p className="error">{error}</p>}
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}

export default App;
