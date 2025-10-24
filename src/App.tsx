import "./App.css";
import { useWeather } from "./hooks/useWeather";
import WeatherCard from "./component/WeatherCard/WeatherCard";
import { CustomButton } from "./component/ui/Button/CustomButton";
import { CustomInput } from "./component/ui/Input/CustomInput";
import { useWeatherStore } from "./store/useWeatherStore";

function App() {
  const { city, setCity } = useWeatherStore();
  const { data, isLoading, error, refetch } = useWeather(city);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    refetch();
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

      {isLoading && <p>Loading...</p>}
      {error && <p className="error">{error.name}</p>}
      {data && <WeatherCard weather={data} />}
    </div>
  );
}

export default App;
